import {Picture} from "../../../resources/model/picture";
import {Service} from "../../../resources/model/service";
/**
 * Created by sanitizer on 7/14/17.
 */

export class ExtendedWorkingHours implements Service {
    name: string;
    description: string;
    pic: Picture;

    constructor() {
        this.name = "Extended Working Hours";
        this.description = this.getDescription();
        this.pic = new Picture("pics/pic.jpg");
    }

    private getDescription() {
        return "We work long and hard for you.";
    }

}