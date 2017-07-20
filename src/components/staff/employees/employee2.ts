import {Employee} from "../employee";
import {Picture} from "../../../resources/model/picture";
import {BASE_EMPLOYEES_DIR} from "./constants";

/**
 * Created by sanitizer on 7/17/17.
 */

export class IrinaMonosova extends Employee {

    constructor(i18n) {
        super(i18n);
    }

    getPicPath(): string {
        return BASE_EMPLOYEES_DIR + "pic.jpg";
    }

    getDataKey(): string {
        return "e2Data";
    }

    getNameKey(): string {
        return "e2Name";
    }

    getPositionKey(): string {
        return "e2Position";
    }

}