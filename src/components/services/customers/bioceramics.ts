/**
 * Created by sanitizer on 7/14/17.
 */

import {Picture} from "../../../resources/model/picture";
import {Service} from "../../../resources/model/service";

export class Bioceramics implements Service {
    name: string;
    description: string;
    pic: Picture;

    constructor() {
        this.name = "Bioceramics";
        this.description = this.getDescription();
        this.pic = new Picture("pics/pic.jpg");
    }

    private getDescription() {
        return "We do whatever bioceramics is. Cool isnt it?";
    }

}