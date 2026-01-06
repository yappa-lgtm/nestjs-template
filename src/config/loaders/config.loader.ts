import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces'

import { appEnv, authEnv, databaseEnv, redisEnv } from '@/config'

export function getConfig(): ConfigModuleOptions {
	return {
		isGlobal: true,
		load: [appEnv, authEnv, redisEnv, databaseEnv]
	}
}
