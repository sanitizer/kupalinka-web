import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";

export class Fashion extends Service {

    constructor(i18n, ea) {
        super(i18n, ea);
    }

    getPicPath(): string {
        return BASE_SERVICES_DIR + "fashion.jpg";
    }

    getNameKey(): string {
        return "fashionName";
    }

    getDataKey(): string {
        return "fashionData";
    }

}