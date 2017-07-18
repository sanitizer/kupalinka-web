import {Picture} from "../../../resources/model/picture";
import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class EslClass extends Service {
    pic: Picture;

    constructor() {
        super();
        this.name = "ESL Class";
        this.pic = new Picture(BASE_SERVICES_DIR + "pic.jpg");
    }

    getDescription() {
        return "This is the ESL class. We study English as a second language.";
    }

}
