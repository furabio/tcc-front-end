import { User } from "app/shared/model/user.model";

export class UserFakeDB 
{
    public static users: User[] = [
        {
            id: 1,
            username: "admin",
            password: "admin123",
            email: "admin@admin.com",
            fullName: "Administrator",
            role: {
                id: 1,
                name: "ADMIN"
            }
        },
        {
            id: 2,
            username: "furabio",
            password: "furabio",
            email: "flvdeveloper@gmail.com",
            fullName: "Flávio Silva Cabral",
            role: {
                id: 2,
                name: "USER"
            }
        }
    ]
}