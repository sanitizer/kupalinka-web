import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";

export class Scenario extends Service {

    constructor(i18n, ea) {
        super(i18n, ea);
    }

    getPicPath(): string {
        return BASE_SERVICES_DIR + "scenario.jpg";
    }

    getNameKey(): string {
        return "scenarioName";
    }

    getDataKey(): string {
        return "scenarioData";
    }

}