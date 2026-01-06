import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'
import { ConfigService } from '@nestjs/config'

import { AllConfigs } from '@/config'

export function getCorsConfig(
	configService: ConfigService<AllConfigs>
): CorsOptions {
	return {
		origin: configService.get('app.cors', { infer: true }).split(','),
		credentials: true
	}
}
