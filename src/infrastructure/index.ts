import { RedisModule } from '@/infrastructure/redis'
import { PrismaModule } from '@/infrastructure/prisma'

export const INFRASTRUCTURE_MODULES = [RedisModule, PrismaModule] as const
