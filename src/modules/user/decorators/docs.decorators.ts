import { applyDecorators } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import {
	ArrayUnique,
	IsArray,
	IsOptional,
	IsString,
	Matches,
	MinLength
} from 'class-validator'

import { ReadRoleResponse } from '@/modules/role/dto'

export function ApiUserNameProperty({ optional = false } = {}) {
	return applyDecorators(
		ApiProperty({
			description: 'Unique username for the user',
			required: !optional,
			example: 'john_doe',
			minLength: 3,
			maxLength: 30
		}),
		IsString(),
		Matches(/^[a-zA-Z0-9_-]+$/, {
			message:
				'Username can only contain letters, numbers, underscores and hyphens'
		}),
		Expose(),
		...(optional ? [IsOptional()] : [])
	)
}

export function ApiUserPasswordProperty({ optional = false } = {}) {
	return applyDecorators(
		ApiProperty({
			description: 'Password for the user account',
			required: !optional,
			example: 'StrongP@ssw0rd',
			minLength: 8,
			maxLength: 100
		}),
		MinLength(8, {
			message: 'Password must be at least 8 characters long'
		}),
		IsString(),
		Matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
			{
				message:
					'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
			}
		),
		Expose(),
		...(optional ? [IsOptional()] : [])
	)
}

export function ApiUserFullNameProperty({ optional = false } = {}) {
	return applyDecorators(
		ApiProperty({
			description: 'Full name of the user',
			required: !optional,
			example: 'John Doe'
		}),
		IsString(),
		Expose(),
		...(optional ? [IsOptional()] : [])
	)
}

export function ApiUserRoleIdsProperty({ optional = false } = {}) {
	return applyDecorators(
		ApiProperty({
			description:
				'List of role IDs to assign to the user. If list is empty roles set empty.',
			required: !optional,
			type: String,
			example: ['B1xY_lROIRoktUTdnyqrb', 'C2zZ_mSPJSpluVUeozrsc'],
			isArray: true
		}),
		IsArray(),
		ArrayUnique({ message: 'Role IDs must be unique' }),
		IsString({ each: true, message: 'Each role ID must be a string' }),
		Expose(),
		...(optional ? [IsOptional()] : [])
	)
}

export function ApiUserRolesProperty({ optional = false } = {}) {
	return applyDecorators(
		ApiProperty({
			description: 'List of roles assigned to the user',
			type: () => ReadRoleResponse,
			isArray: true
		}),
		Expose(),
		...(optional ? [IsOptional()] : [])
	)
}
