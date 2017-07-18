import {Picture} from "../../../resources/model/picture";
import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class WellnessClasses extends Service {
    pic: Picture;

    constructor() {
        super();
        this.name = "Wellness Classes";
        this.pic = new Picture(BASE_SERVICES_DIR + "pic.jpg");
    }

    getDescription() {
        return "we do that kind of wellness and this kind of wellness. Ex: swimming pool, excercises, good nutrition, vitamins";
    }

}