import {
	ApiUserFullNameProperty,
	ApiUserNameProperty,
	ApiUserPasswordProperty,
} from '@/modules/user/decorators'

export class CreateUserRequest {
	@ApiUserNameProperty()
	public username: string

	@ApiUserPasswordProperty()
	public password: string

	@ApiUserFullNameProperty()
	public fullName: string
}
