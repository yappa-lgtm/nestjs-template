import { ApiNanoIdProperty } from '@/shared/decorators'
import { ApiUserRoleIdsProperty } from '@/modules/user/decorators'

export class AssignUserRolesRequest {
	@ApiNanoIdProperty()
	public id: string

	@ApiUserRoleIdsProperty()
	public roleIds: string[]
}