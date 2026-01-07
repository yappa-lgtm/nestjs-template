import {
	ConflictException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { plainToInstance } from 'class-transformer'

import { CreateRoleRequest, ReadRoleResponse, UpdateRoleRequest } from './dto'
import { RoleRepository } from './role.repository'

@Injectable()
export class RoleService {
	public constructor(private readonly roleRepository: RoleRepository) {}

	async findById(id: string): Promise<ReadRoleResponse> {
		const roleEntity = await this.roleRepository.findById(id)

		if (!roleEntity) {
			throw new NotFoundException('Role with this id not found')
		}

		return plainToInstance(ReadRoleResponse, roleEntity)
	}

	async create(dto: CreateRoleRequest): Promise<ReadRoleResponse> {
		const existedEntity = await this.roleRepository.findByName(dto.name)

		if (existedEntity) {
			throw new ConflictException('Role with this name already exists')
		}

		const roleEntity = await this.roleRepository.create(dto)

		return plainToInstance(ReadRoleResponse, roleEntity)
	}

	async update(dto: UpdateRoleRequest) {
		const { id, name } = dto

		const existedRole = await this.roleRepository.findById(id)

		if (!existedRole) {
			throw new NotFoundException('Role with this id not found')
		}

		if (name && name !== existedRole.name) {
			const roleWithSameName = await this.roleRepository.findByName(name)

			if (roleWithSameName) {
				throw new ConflictException(
					'Role with this name already exists'
				)
			}
		}

		const updatedRole = await this.roleRepository.update(id, dto)

		return plainToInstance(ReadRoleResponse, updatedRole)
	}

	async delete(id: string) {
		const existedRole = await this.roleRepository.findById(id)

		if (!existedRole) {
			throw new NotFoundException('Role with this id not found')
		}

		const deletedEntity = await this.roleRepository.delete(id)

		return plainToInstance(ReadRoleResponse, deletedEntity)
	}

	async findAll() {
		const roleEntities = await this.roleRepository.findAll()

		return roleEntities.map(entity =>
			plainToInstance(ReadRoleResponse, entity)
		)
	}
}
