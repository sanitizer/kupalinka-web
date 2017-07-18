import {DataFormat} from "../../resources/model/data_format";
/**
 * Created by sanitizer on 7/17/17.
 */

export class Employee implements DataFormat {
    name: string;
    description: string;
    position: string;

    constructor() {
        this.description = this.getDescription();
    }

    getDescription(): string {
        return "";
    }

}