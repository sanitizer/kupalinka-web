import {Employee} from "../employee";
import {Picture} from "../../../resources/model/picture";
import {BASE_EMPLOYEES_DIR} from "./constants";

/**
 * Created by sanitizer on 7/17/17.
 */

export class IrinaMonosova extends Employee {

    constructor(i18n, ea) {
        super(i18n, ea);
    }

    getPicPath(): string {
        return "";
    }

    getDataKey(): string {
        return "emps:e2Data";
    }

    getNameKey(): string {
        return "emps:e2Name";
    }

    getPositionKey(): string {
        return "emps:e2Position";
    }

}