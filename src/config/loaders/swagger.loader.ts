import { INestApplication } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AllConfigs } from '@/config'

export function setupSwagger(
	app: INestApplication,
	configService: ConfigService<AllConfigs>
) {
	const { title, description, version, swaggerUrl, swaggerDocumentYamlUrl } =
		configService.get('app', { infer: true })

	const swaggerConfig = new DocumentBuilder()
		.setTitle(title)
		.setDescription(description)
		.setVersion(version)
		.addBearerAuth()
		.build()

	const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)

	SwaggerModule.setup(swaggerUrl, app, swaggerDocument, {
		yamlDocumentUrl: swaggerDocumentYamlUrl
	})
}
