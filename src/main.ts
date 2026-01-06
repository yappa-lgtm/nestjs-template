import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import {
	AllConfigs,
	getCookieParserConfig,
	getCorsConfig,
	getValidationPipeConfig,
	setupSwagger
} from '@/config'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = app.get(ConfigService<AllConfigs>)
	const logger = new Logger()

	const { host, port, swaggerUrl, swaggerDocumentYamlUrl } = config.get(
		'app',
		{ infer: true }
	)

	app.use(getCookieParserConfig(config))

	app.useGlobalPipes(new ValidationPipe(getValidationPipeConfig()))

	app.enableCors(getCorsConfig(config))

	setupSwagger(app, config)

	await app.listen(port)

	logger.log(`Gateway Service started: ${host}`)
	logger.log(`Swagger started: ${host}${swaggerUrl}`)
	logger.log(
		`Swagger Document yaml started: ${host}${swaggerDocumentYamlUrl}`
	)
}

bootstrap()
