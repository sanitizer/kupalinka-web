import {Picture} from "../../../resources/model/picture";
import {Service} from "../service";
import {BASE_DATA_DIR, BASE_SERVICES_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class EslClass extends Service {
    pic: Picture;

    constructor(i18n) {
        super(i18n);
        this.name = "ESL Class";
        this.pic = new Picture(BASE_SERVICES_DIR + "pic.jpg");
    }

    getDataPath(): string {
        return BASE_DATA_DIR + "esl_class.txt";
    }

}
