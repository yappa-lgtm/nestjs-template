import { ApiProperty } from '@nestjs/swagger'
import { Permission } from '@prisma/generated/enums'
import {
	ArrayMinSize,
	ArrayUnique,
	IsArray,
	IsEnum,
	IsOptional,
	IsString
} from 'class-validator'

export class UpdateRoleDto {
	@ApiProperty({
		description: 'Unique identifier of the role',
		example: 'B1xY_lROIRoktUTdnyqrb'
	})
	@IsString()
	public id: string

	@ApiProperty({
		description: 'Unique name of the role',
		required: false,
		example: 'Admin'
	})
	@IsString()
	@IsOptional()
	public name?: string

	@ApiProperty({
		description: 'Optional description of the role',
		required: false,
		example: 'Role for system administrators'
	})
	@IsOptional()
	@IsString()
	public description?: string

	@ApiProperty({
		description:
			'List of permissions assigned to the role. Must contain at least one unique permission.',
		enum: Permission,
		isArray: true,
		required: false,
		example: [Permission.READ_USER, Permission.READ_ROLE]
	})
	@IsArray()
	@ArrayMinSize(1, { message: 'At least one permission must be provided' })
	@ArrayUnique({ message: 'Permissions must be unique' })
	@IsEnum(Permission, {
		each: true,
		message: 'Each permission must be a valid enum value'
	})
	@IsOptional()
	public permissions?: Permission[]
}
