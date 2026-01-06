import {Permission} from '@prisma/generated/enums'
import {ApiRoleDescriptionProperty, ApiRoleNameProperty, ApiRolePermissionsProperty} from "@/modules/role/decorators";


export class CreateRoleDto {
    @ApiRoleNameProperty()
    public name: string

    @ApiRoleDescriptionProperty({optional: true})
    public description?: string

    @ApiRolePermissionsProperty()
    public permissions: Permission[]
}
