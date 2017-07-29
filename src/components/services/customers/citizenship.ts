import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";

export class Citizenship extends Service {

    constructor(i18n, ea) {
        super(i18n, ea);
    }

    getPicPath(): string {
        return BASE_SERVICES_DIR + "bioceramics.jpg";
    }

    getNameKey(): string {
        return "citizenName";
    }

    getDataKey(): string {
        return "citizenData";
    }

}