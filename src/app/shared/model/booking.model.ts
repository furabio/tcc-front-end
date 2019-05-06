import { BaseResourceModel } from "./base-resource.model";
import { User } from "./user.model";
import { Classroom } from "./classroom.model";

export class Booking extends BaseResourceModel {
    public user?: User;
    public classroom?: Classroom;
    public bookingDate?: string;
}