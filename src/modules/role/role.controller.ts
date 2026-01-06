import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common'
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Role } from '@prisma/generated/client'

import { CreateRoleDto, ReadRoleResponse, UpdateRoleDto } from './dto'
import { RoleService } from './role.service'

@ApiTags('Roles')
@Controller('role')
export class RoleController {
	constructor(private readonly roleService: RoleService) {}

	@Get(':id')
	@ApiOperation({ summary: 'Get role by ID' })
	@ApiResponse({
		status: 200,
		description: 'Role found',
		type: ReadRoleResponse
	})
	@ApiResponse({ status: 404, description: 'Role with this id not found' })
	async findById(@Param('id') id: string): Promise<ReadRoleResponse> {
		return this.roleService.findById(id)
	}

	@Post()
	@ApiOperation({ summary: 'Create a new role' })
	@ApiBody({ type: CreateRoleDto })
	@ApiResponse({
		status: 201,
		description: 'Role successfully created',
		type: ReadRoleResponse
	})
	@ApiResponse({
		status: 409,
		description: 'Role with this name already exists'
	})
	async create(@Body() dto: CreateRoleDto) {
		return this.roleService.create(dto)
	}

	@Patch()
	@ApiOperation({ summary: 'Update a role' })
	@ApiBody({ type: UpdateRoleDto })
	@ApiResponse({
		status: 200,
		description: 'Role successfully updated',
		type: ReadRoleResponse
	})
	@ApiResponse({
		status: 404,
		description: 'Role not found'
	})
	@ApiResponse({
		status: 409,
		description: 'Role with this name already exists'
	})
	async update(@Body() dto: UpdateRoleDto) {
		return this.roleService.update(dto)
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete a role by ID' })
	@ApiResponse({
		status: 200,
		description: 'Role deleted',
		type: ReadRoleResponse
	})
	@ApiResponse({ status: 404, description: 'Role with this id not found' })
	async delete(@Param('id') id: string) {
		return this.roleService.delete(id)
	}

	@Get()
	@ApiOperation({ summary: 'Find all roles' })
	@ApiResponse({
		status: 200,
		description: 'Roles found',
		type: ReadRoleResponse,
		isArray: true
	})
	async findAll() {
		return this.roleService.findAll()
	}
}
