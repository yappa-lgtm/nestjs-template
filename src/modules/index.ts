import { MonitorModule } from '@/modules/monitor'
import { RoleModule } from '@/modules/role'
import { UserModule } from '@/modules/user'

export const MODULES = [MonitorModule, RoleModule, UserModule] as const
