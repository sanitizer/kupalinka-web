import {Employee} from "../employee";
import {BASE_EMPLOYEES_DIR} from "./constants";

/**
 * Created by sanitizer on 7/17/17.
 */
export class AlenaVolchak extends Employee {

    constructor(i18n) {
        super(i18n);
    }

    getPicPath(): string {
        return BASE_EMPLOYEES_DIR + "pic.jpg";
    }

    getDataKey(): string {
        return "e1Data";
    }

    getNameKey(): string {
        return "e1Name";
    }

    getPositionKey(): string {
        return "e1Position";
    }

}