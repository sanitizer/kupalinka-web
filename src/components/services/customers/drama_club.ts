import {Picture} from "../../../resources/model/picture";
import {Service} from "../../../resources/model/service";
import {BASE_SERVICES_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class DramaClub implements Service {
    name: string;
    description: string;
    pic: Picture;

    constructor() {
        this.name = "Drama Club";
        this.description = this.getDescription();
        this.pic = new Picture(BASE_SERVICES_DIR + "pic.jpg");
    }

    private getDescription() {
        return "Oh yes!!! We have a lot of drama here.";
    }

}