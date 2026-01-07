import {
	ApiUserFullNameProperty,
	ApiUserNameProperty,
	ApiUserPasswordProperty
} from '@/modules/user/decorators'
import { ApiNanoIdProperty } from '@/shared/decorators'

export class UpdateUserRequest {
	@ApiNanoIdProperty()
	public id: string

	@ApiUserNameProperty({ optional: true })
	public username: string

	@ApiUserPasswordProperty({ optional: true })
	public password: string

	@ApiUserFullNameProperty({ optional: true })
	public fullName: string
}
