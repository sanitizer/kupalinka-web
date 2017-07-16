import {Picture} from "../../../resources/model/picture";
import {Service} from "../../../resources/model/service";
/**
 * Created by sanitizer on 7/14/17.
 */

export class ComputerClass implements Service {
    name: string;
    description: string;
    pic: Picture;

    constructor() {
        this.name = "Computer Class";
        this.description = this.getDescription();
        this.pic = new Picture("pics/pic.jpg");
    }

    private getDescription() {
        return "This is the computer class. We study computers.";
    }

}