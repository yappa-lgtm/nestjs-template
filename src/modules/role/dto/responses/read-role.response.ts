import {Permission} from '@prisma/generated/enums'
import {ApiCreateAtProperty, ApiNanoIdProperty, ApiUpdatedAtProperty} from "@/shared/decorators";
import {ApiRoleDescriptionProperty, ApiRoleNameProperty, ApiRolePermissionsProperty} from "@/modules/role/decorators";

export class ReadRoleResponse {
    @ApiNanoIdProperty()
    public id: string

    @ApiRoleNameProperty()
    public name: string

    @ApiRoleDescriptionProperty({optional: true})
    public description?: string

    @ApiRolePermissionsProperty()
    public permissions: Permission[]

    @ApiCreateAtProperty()
    public createdAt: Date

    @ApiUpdatedAtProperty()
    public updatedAt: Date
}
