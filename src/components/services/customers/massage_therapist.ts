import {Picture} from "../../../resources/model/picture";
import {Service} from "../../../resources/model/service";
/**
 * Created by sanitizer on 7/14/17.
 */

export class MassageTherapist implements Service {
    name: string;
    description: string;
    pic: Picture;

    constructor() {
        this.name = "Massage Therapist";
        this.description = this.getDescription();
        this.pic = new Picture("pics/pic.jpg");
    }

    private getDescription() {
        return "We have a massage therapist stopping by from time to time.";
    }

}