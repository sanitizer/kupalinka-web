import {DataFormat} from "../../resources/model/data_format";
/**
 * Created by sanitizer on 7/17/17.
 */

export class Employee implements DataFormat {
    name: string;
    data: string;
    position: string;

    constructor() {
        this.data = this.getDescription();
    }

    getDescription(): string {
        return "";
    }

}