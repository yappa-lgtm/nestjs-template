import { PrismaModule } from '@/infrastructure/prisma'
import { RedisModule } from '@/infrastructure/redis'

export const INFRASTRUCTURE_MODULES = [RedisModule, PrismaModule] as const
