import { Injectable } from '@nestjs/common'
import { Role } from '@prisma/generated/client'
import { RoleCreateInput, RoleUpdateInput } from '@prisma/generated/models/Role'

import { PrismaService } from '@/infrastructure/prisma'

@Injectable()
export class RoleRepository {
	public constructor(private readonly prismaService: PrismaService) {}

	async findByName(name: string): Promise<Role | null> {
		return this.prismaService.role.findUnique({ where: { name } })
	}

	async findById(id: string): Promise<Role | null> {
		return this.prismaService.role.findUnique({ where: { id } })
	}

	async create(data: RoleCreateInput): Promise<Role> {
		return this.prismaService.role.create({ data })
	}

	async update(id: string, data: RoleUpdateInput): Promise<Role> {
		return this.prismaService.role.update({
			where: { id },
			data
		})
	}

	async delete(id: string): Promise<Role> {
		return this.prismaService.role.delete({ where: { id } })
	}

	async findAll(): Promise<Role[]> {
		return this.prismaService.role.findMany()
	}
}
