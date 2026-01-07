import { Permission } from '@prisma/generated/enums'

import {
	ApiRoleDescriptionProperty,
	ApiRoleNameProperty,
	ApiRolePermissionsProperty
} from '@/modules/role/decorators'
import { ApiNanoIdProperty } from '@/shared/decorators'

export class UpdateRoleRequest {
	@ApiNanoIdProperty()
	public id: string

	@ApiRoleNameProperty({ optional: true })
	public name?: string

	@ApiRoleDescriptionProperty({ optional: true })
	public description?: string

	@ApiRolePermissionsProperty({ optional: true })
	public permissions?: Permission[]
}
