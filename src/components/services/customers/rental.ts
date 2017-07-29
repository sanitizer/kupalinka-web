import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";

export class Rental extends Service {

    constructor(i18n, ea) {
        super(i18n, ea);
    }

    getPicPath(): string {
        return BASE_SERVICES_DIR + "rent.jpg";
    }

    getNameKey(): string {
        return "rentName";
    }

    getDataKey(): string {
        return "rentData";
    }

}