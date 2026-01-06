import { registerAs } from '@nestjs/config'

import { AppConfig } from '@/config'
import { validateEnv } from '@/shared/utils'

import { AppValidator } from '../validators'

export const appEnv = registerAs<AppConfig>('app', () => {
	validateEnv(process.env, AppValidator)

	return {
		nodeEnv: process.env.NODE_ENV,
		title: process.env.TITLE,
		description: process.env.DESCRIPTION,
		version: process.env.VERSION,
		host: process.env.HOST,
		port: parseInt(process.env.PORT),
		swaggerUrl: process.env.SWAGGER_URL,
		swaggerDocumentYamlUrl: process.env.SWAGGER_DOCUMENT_YAML_URL,
		cors: process.env.CORS
	}
})
