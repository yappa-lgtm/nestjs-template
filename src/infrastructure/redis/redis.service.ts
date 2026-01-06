import {
	Injectable,
	Logger,
	OnModuleDestroy,
	OnModuleInit
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import Redis from 'ioredis'

import { AllConfigs } from '@/config'

@Injectable()
export class RedisService
	extends Redis
	implements OnModuleInit, OnModuleDestroy
{
	private readonly logger = new Logger(RedisService.name)

	constructor(private readonly configService: ConfigService<AllConfigs>) {
		super({
			password: configService.get('redis.password', { infer: true }),
			host: configService.get('redis.host', { infer: true }),
			port: configService.get('redis.port', { infer: true }),
			maxRetriesPerRequest: 5,
			enableOfflineQueue: true
		})
	}

	async onModuleInit() {
		const start = Date.now()

		this.logger.log('Initializing Redis connection...')

		await new Promise<void>((resolve, reject) => {
			this.once('ready', () => {
				const ms = Date.now() - start
				this.logger.log(`Redis connection established: (time=${ms}ms)`)
				resolve()
			})

			this.once('error', error => {
				this.logger.error('Redis error during init', {
					error: error.message ?? error
				})
				reject(error)
			})
		})

		this.on('connect', () => {
			this.logger.log('Redis connecting...')
		})

		this.on('close', () => {
			this.logger.log('Redis connection closed')
		})

		this.on('reconnecting', () => {
			this.logger.log('Redis reconnecting...')
		})
	}

	async onModuleDestroy() {
		this.logger.log('Closing Redis connection...')

		try {
			await this.quit()

			this.logger.log('Redis connection closed')
		} catch (error) {
			this.logger.error('Error closing Redis connection: ', {
				error: error.message ?? error
			})
		}
	}
}
