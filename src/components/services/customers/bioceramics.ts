import {Picture} from "../../../resources/model/picture";
import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";

/**
 * Created by sanitizer on 7/14/17.
 */

export class Bioceramics extends Service {
    pic: Picture;

    constructor() {
        super();
        this.name = "Bioceramics";
        this.pic = new Picture(BASE_SERVICES_DIR + "pic.jpg");
    }

    getDescription() {
        return "We do whatever bioceramics is. Cool isnt it?";
    }

}