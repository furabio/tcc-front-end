import { BaseResourceModel } from "./base-resource.model";
import { PeriodType } from "./enums/period-type.enum";

export class Period extends BaseResourceModel {
    public init?: string;
    public end?: string;
    public periodType?: PeriodType;

    constructor(init?: string, end?: string) {
        super();
        this.init = init;
        this.end = end;
    }
}