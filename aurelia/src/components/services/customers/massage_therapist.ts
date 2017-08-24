import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class MassageTherapist extends Service {

    constructor(i18n, ea) {
        super(i18n, ea);
    }

    getPicPath(): string {
        return BASE_SERVICES_DIR + "massage.jpg";
    }

    getNameKey(): string {
        return "massageName";
    }

    getDataKey(): string {
        return "massageData";
    }

}