import {Picture} from "../../../resources/model/picture";
import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class DramaClub extends Service {
    pic: Picture;

    constructor() {
        super();
        this.name = "Drama Club";
        this.pic = new Picture(BASE_SERVICES_DIR + "pic.jpg");
    }

    getDescription() {
        return "Oh yes!!! We have a lot of drama here.";
    }

}