import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { getConfig } from '@/config'
import { INFRASTRUCTURE_MODULES } from '@/infrastructure'
import { MODULES } from '@/modules'

@Module({
	imports: [
		ConfigModule.forRoot(getConfig()),
		...MODULES,
		...INFRASTRUCTURE_MODULES
	]
})
export class AppModule {}
