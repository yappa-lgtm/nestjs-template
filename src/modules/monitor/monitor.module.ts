import { RedisHealthModule } from '@liaoliaots/nestjs-redis-health'
import { Module } from '@nestjs/common'
import { TerminusModule } from '@nestjs/terminus'

import { MonitorController } from './monitor.controller'

@Module({
	imports: [TerminusModule, RedisHealthModule],
	controllers: [MonitorController]
})
export class MonitorModule {}
