import { ConfigService } from '@nestjs/config'
import cookieParser from 'cookie-parser'

import { AllConfigs } from '@/config'

export function getCookieParserConfig(
	configService: ConfigService<AllConfigs>
) {
	const authConfig = configService.get('auth', { infer: true })

	return cookieParser(authConfig.cookiesSecret)
}
