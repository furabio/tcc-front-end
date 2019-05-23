import { User } from "app/shared/model/user.model";

export class UserFakeDB 
{
    public static users: User[] = [
        {
            id: 1,
            username: "admin",
            password: "admin",
            email: "admin@admin.com",
            fullName: "Administrator",
            role: {
                id: 1,
                name: "ADM"
            }
        },
        {
            id: 2,
            username: "furabio",
            password: "123",
            email: "flvdeveloper@gmail.com",
            fullName: "Flávio Silva Cabral",
            role: {
                id: 2,
                name: "USER"
            }
        }
    ]
}