import { registerAs } from '@nestjs/config'

import { AuthConfig } from '@/config'
import { validateEnv } from '@/shared/utils'

import { AuthValidator } from '../validators'

export const authEnv = registerAs<AuthConfig>('auth', () => {
	validateEnv(process.env, AuthValidator)

	return {
		cookiesDomain: process.env.COOKIES_DOMAIN,
		cookiesSecret: process.env.COOKIES_SECRET
	}
})
