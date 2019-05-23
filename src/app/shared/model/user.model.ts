import { BaseResourceModel } from "./base-resource.model";
import { Role } from "./role.model";

export class User extends BaseResourceModel {
    username?: string;
    password?: string;
    fullName?: string;
    email?: string;
    role?: Role;

    constructor(username?: string,
        password?: string,
        fullName?: string,
        email?: string,
        role?: Role) {
        super();
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
        this.role = role;
    }
}