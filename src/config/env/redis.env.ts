import { registerAs } from '@nestjs/config'

import type { RedisConfig } from '@/config'
import { RedisValidator } from '@/config/validators'
import { validateEnv } from '@/shared/utils'

export const redisEnv = registerAs<RedisConfig>('redis', () => {
	validateEnv(process.env, RedisValidator)

	return {
		password: process.env.REDIS_PASSWORD,
		host: process.env.REDIS_HOST,
		port: parseInt(process.env.REDIS_PORT)
	}
})
