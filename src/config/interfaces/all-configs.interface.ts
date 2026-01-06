import { AppConfig, AuthConfig, DatabaseConfig, RedisConfig } from '@/config'

export interface AllConfigs {
	app: AppConfig
	auth: AuthConfig
	redis: RedisConfig
	database: DatabaseConfig
}
