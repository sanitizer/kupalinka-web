import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";

/**
 * Created by sanitizer on 7/14/17.
 */

export class Bioceramics extends Service {

    constructor(i18n, ea) {
        super(i18n, ea);
    }

    getPicPath(): string {
        return BASE_SERVICES_DIR + "bioceramics.jpg";
    }

    getNameKey(): string {
        return "bioName";
    }

    getDataKey(): string {
        return "bioData";
    }

}