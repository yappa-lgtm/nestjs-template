import { Injectable } from '@nestjs/common'
import { User } from '@prisma/generated/client'
import {
	UserCreateArgs,
	UserCreateInput,
	UserDeleteArgs,
	UserFindManyArgs,
	UserFindUniqueArgs,
	UserUpdateArgs,
	UserUpdateInput
} from '@prisma/generated/models/User'

import { PrismaService } from '@/infrastructure/prisma'

@Injectable()
export class UserRepository {
	public constructor(private readonly prismaService: PrismaService) {}

	async findAll(args?: Partial<UserFindManyArgs>): Promise<User[]> {
		return this.prismaService.user.findMany(args)
	}

	async findByUsername(
		username: string,
		args?: Partial<UserFindUniqueArgs>
	): Promise<User | null> {
		return this.prismaService.user.findUnique({
			where: { username },
			...args
		})
	}

	async findById(
		id: string,
		args?: Partial<UserFindUniqueArgs>
	): Promise<User | null> {
		return this.prismaService.user.findUnique({
			where: { id },
			...args
		})
	}

	async create(
		data: UserCreateInput,
		args?: Partial<UserCreateArgs>
	): Promise<User> {
		return this.prismaService.user.create({
			data,
			...args
		})
	}

	async assignRoles(
		id: string,
		roleIds: string[],
		args?: Partial<UserUpdateArgs>
	): Promise<User> {
		return this.prismaService.user.update({
			where: { id },
			data: {
				roles: roleIds.length
					? {
							connect: roleIds.map(id => ({ id }))
						}
					: {
							set: []
						}
			},
			...args
		})
	}

	async update(
		id: string,
		data: UserUpdateInput,
		args?: Partial<UserUpdateArgs>
	): Promise<User> {
		return this.prismaService.user.update({
			where: { id },
			data,
			...args
		})
	}

	async delete(id: string, args?: Partial<UserDeleteArgs>): Promise<User> {
		return this.prismaService.user.delete({ where: { id }, ...args })
	}
}
