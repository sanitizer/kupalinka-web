import {Picture} from "../../../resources/model/picture";
import {Service} from "../../../resources/model/service";
/**
 * Created by sanitizer on 7/14/17.
 */

export class WellnessClasses implements Service {
    name: string;
    description: string;
    pic: Picture;

    constructor() {
        this.name = "Wellness Classes";
        this.description = this.getDescription();
        this.pic = new Picture("pics/pic.jpg");
    }

    private getDescription() {
        return "we do that kind of wellness and this kind of wellness. Ex: swimming pool, excercises, good nutrition, vitamins";
    }

}