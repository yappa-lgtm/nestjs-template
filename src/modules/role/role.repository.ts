import { Injectable } from '@nestjs/common'
import { Role } from '@prisma/generated/client'
import {
	RoleCreateArgs,
	RoleCreateInput,
	RoleDeleteArgs,
	RoleFindManyArgs,
	RoleFindUniqueArgs,
	RoleUpdateArgs,
	RoleUpdateInput
} from '@prisma/generated/models/Role'

import { PrismaService } from '@/infrastructure/prisma'

@Injectable()
export class RoleRepository {
	public constructor(private readonly prismaService: PrismaService) {}

	async findByName(
		name: string,
		args?: Partial<RoleFindUniqueArgs>
	): Promise<Role | null> {
		return this.prismaService.role.findUnique({ where: { name }, ...args })
	}

	async findById(
		id: string,
		args?: Partial<RoleFindUniqueArgs>
	): Promise<Role | null> {
		return this.prismaService.role.findUnique({ where: { id }, ...args })
	}

	async create(
		data: RoleCreateInput,
		args?: Partial<RoleCreateArgs>
	): Promise<Role> {
		return this.prismaService.role.create({ data, ...args })
	}

	async update(
		id: string,
		data: RoleUpdateInput,
		args?: Partial<RoleUpdateArgs>
	): Promise<Role> {
		return this.prismaService.role.update({
			where: { id },
			data,
			...args
		})
	}

	async delete(id: string, args?: Partial<RoleDeleteArgs>): Promise<Role> {
		return this.prismaService.role.delete({ where: { id }, ...args })
	}

	async findAll(args?: RoleFindManyArgs): Promise<Role[]> {
		return this.prismaService.role.findMany(args)
	}
}
