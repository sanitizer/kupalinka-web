import {Picture} from "../../../resources/model/picture";
import {Service} from "../../../resources/model/service";
import {BASE_SERVICES_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class SkinCareClass implements Service {
    name: string;
    description: string;
    pic: Picture;

    constructor() {
        this.name = "Skin Care Class";
        this.description = this.getDescription();
        this.pic = new Picture(BASE_SERVICES_DIR + "pic.jpg");
    }

    private getDescription() {
        return "We teach you how to care of your skin.";
    }

}