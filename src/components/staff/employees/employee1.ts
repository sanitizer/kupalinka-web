import {Employee} from "../employee";
import {BASE_EMPLOYEES_DIR} from "./constants";

/**
 * Created by sanitizer on 7/17/17.
 */
export class AlenaVolchak extends Employee {

    constructor(i18n, ea) {
        super(i18n, ea);
    }

    getPicPath(): string {
        return BASE_EMPLOYEES_DIR + "pic.jpg";
    }

    getDataKey(): string {
        return "emps:e1Data";
    }

    getNameKey(): string {
        return "emps:e1Name";
    }

    getPositionKey(): string {
        return "emps:e1Position";
    }

}