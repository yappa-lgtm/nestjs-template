import { ApiProperty } from '@nestjs/swagger'
import { Permission } from '@prisma/generated/enums'
import { Expose } from 'class-transformer'

export class ReadRoleResponse {
	@ApiProperty({
		description: 'Unique identifier of the role',
		example: 'B1xY_lROIRoktUTdnyqrb'
	})
	@Expose()
	public id: string

	@ApiProperty({
		description: 'Unique name of the role',
		example: 'Admin'
	})
	@Expose()
	public name: string

	@ApiProperty({
		description: 'Optional description of the role',
		required: false,
		example: 'Role for system administrators'
	})
	@Expose()
	public description?: string

	@ApiProperty({
		description:
			'List of permissions assigned to the role. Must contain at least one unique permission.',
		enum: Permission,
		isArray: true,
		example: [Permission.READ_USER, Permission.READ_ROLE]
	})
	@Expose()
	public permissions: Permission[]

	@ApiProperty({
		description: 'Date and time when the role was created',
		example: '2026-01-06T12:00:00.000Z',
		type: String
	})
	@Expose()
	public createdAt: Date

	@ApiProperty({
		description: 'Date and time when the role was last updated',
		example: '2026-01-06T12:30:00.000Z',
		type: String
	})
	@Expose()
	public updatedAt: Date
}
