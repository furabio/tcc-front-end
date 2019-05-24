import { BaseResourceModel } from "./base-resource.model";

export class Classroom extends BaseResourceModel {
    public name?: string;
    public description?: string;

    constructor(name?: string, description?: string) {
        super();
        this.name = name;
        this.description = description;
    }
}