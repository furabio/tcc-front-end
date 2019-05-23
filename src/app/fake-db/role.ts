import { Role } from "app/shared/model/role.model";

export class RoleFakeDb 
{

    public static roles: Role[] = [
        {
            id: 1,
            name: "ADMIN"
        },
        {
            id: 2,
            name: "USER"
        }
    ]
}