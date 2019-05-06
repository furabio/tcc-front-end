import { BaseResourceModel } from "./base-resource.model";
import { Role } from "./role.model";

export class User extends BaseResourceModel {
    public username?: string;
    public fullName?: string;
    public email?: string;
    public role?: Role;
}