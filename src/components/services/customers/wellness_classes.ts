import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class WellnessClasses extends Service {

    constructor(i18n, ea) {
        super(i18n, ea);
    }

    getPicPath(): string {
        return BASE_SERVICES_DIR + "wellness.jpg";
    }

    getNameKey(): string {
        return "wellnessName";
    }

    getDataKey(): string {
        return "wellnessData";
    }

}