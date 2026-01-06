import {applyDecorators} from "@nestjs/common";
import {ApiProperty} from "@nestjs/swagger";
import {ArrayMinSize, ArrayUnique, IsArray, IsEnum, IsOptional, IsString} from "class-validator";
import {Expose} from "class-transformer";
import {Permission} from "@prisma/generated/enums";

export function ApiRoleNameProperty({optional = false} = {}) {
    return applyDecorators(
        ApiProperty({
            description: 'Unique name of the role',
            example: 'Admin',
            required: !optional
        }),
        IsString(),
        Expose(),
        ...(optional ? [IsOptional()] : [])
    )
}

export function ApiRoleDescriptionProperty({optional = false} = {}) {
    return applyDecorators(
        ApiProperty({
            description: 'Optional description of the role',
            required: !optional,
            example: 'Role for system administrators'
        }),
        IsString(),
        Expose(),
        ...(optional ? [IsOptional()] : [])
    )
}

export function ApiRolePermissionsProperty({optional = false} = {}) {
    return applyDecorators(
        ApiProperty({
            description:
                'List of permissions assigned to the role. Must contain at least one unique permission.',
            required: !optional,
            enum: Permission,
            isArray: true,
            example: [Permission.READ_USER, Permission.READ_ROLE]
        }),
        IsArray(),
        ArrayMinSize(1, {message: 'At least one permission must be provided'}),
        ArrayUnique({message: 'Permissions must be unique'}),
        IsEnum(Permission, {
            each: true,
            message: 'Each permission must be a valid enum value'
        }),
        Expose(),
        ...(optional ? [IsOptional()] : [])
    )
}