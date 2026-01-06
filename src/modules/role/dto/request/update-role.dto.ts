import {Permission} from '@prisma/generated/enums'
import {ApiNanoIdProperty} from "@/shared/decorators";
import {ApiRoleDescriptionProperty, ApiRoleNameProperty, ApiRolePermissionsProperty} from "@/modules/role/decorators";

export class UpdateRoleDto {
    @ApiNanoIdProperty()
    public id: string

    @ApiRoleNameProperty({optional: true})
    public name?: string

    @ApiRoleDescriptionProperty({optional: true})
    public description?: string

    @ApiRolePermissionsProperty({optional: true})
    public permissions?: Permission[]
}
