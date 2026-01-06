import {RedisHealthIndicator} from '@liaoliaots/nestjs-redis-health'
import {Controller, Get, Redirect} from '@nestjs/common'
import {ConfigService} from '@nestjs/config'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {HealthCheck, HealthCheckService, PrismaHealthIndicator} from '@nestjs/terminus'

import {AllConfigs} from '@/config'
import {RedisService} from '@/infrastructure/redis'
import {PrismaService} from "@/infrastructure/prisma";

@ApiTags('Monitor')
@Controller()
export class MonitorController {
    constructor(
        private readonly health: HealthCheckService,
        private readonly redisHealth: RedisHealthIndicator,
        private readonly redisService: RedisService,
        private readonly prismaHealth: PrismaHealthIndicator,
        private readonly prismaService: PrismaService,
        private readonly configService: ConfigService<AllConfigs>
    ) {
    }

    @Get()
    @Redirect()
    @ApiOperation({summary: 'Redirect to API documentation'})
    @ApiResponse({
        status: 302,
        description: 'Redirects to Swagger documentation'
    })
    async redirectToDocs() {
        const swaggerUrl = this.configService.get('app.swaggerUrl', {
            infer: true
        })

        return {url: swaggerUrl, statusCode: 302}
    }

    @Get('health')
    @HealthCheck()
    @ApiOperation({summary: 'Health check endpoint'})
    @ApiResponse({status: 200, description: 'Service is healthy'})
    @ApiResponse({status: 503, description: 'Service is unhealthy'})
    async check() {
        return this.health.check([
            () =>
                this.redisHealth.checkHealth('redis', {
                    type: 'redis',
                    client: this.redisService,
                    timeout: 500
                }),

            () =>
                this.prismaHealth.pingCheck('database', this.prismaService)
        ])
    }
}
