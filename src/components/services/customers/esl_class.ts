import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class EslClass extends Service {

    constructor(i18n) {
        super(i18n);
    }

    getPicPath(): string {
        return BASE_SERVICES_DIR + "pic.jpg";
    }

    getNameKey(): string {
        return "eslName";
    }

    getDataKey(): string {
        return "eslData";
    }

}
