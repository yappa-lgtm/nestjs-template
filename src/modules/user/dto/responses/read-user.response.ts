import { ReadRoleResponse } from '@/modules/role/dto'
import {
	ApiUserFullNameProperty,
	ApiUserNameProperty,
	ApiUserRolesProperty
} from '@/modules/user/decorators'
import {
	ApiCreateAtProperty,
	ApiNanoIdProperty,
	ApiUpdatedAtProperty
} from '@/shared/decorators'

export class ReadUserResponse {
	@ApiNanoIdProperty()
	public id: string

	@ApiUserNameProperty()
	public username: string

	@ApiUserFullNameProperty()
	public fullName: string

	@ApiUserRolesProperty()
	public roles: ReadRoleResponse[]

	@ApiCreateAtProperty()
	public createdAt: Date

	@ApiUpdatedAtProperty()
	public updatedAt: Date
}
