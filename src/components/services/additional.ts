/**
 * Created by sanitizer on 7/14/17.
 */

import {ArtClasses} from "./customers/art_classes";
import {Service} from "../../resources/model/service";

export class Additional {

    services: Array<Service>;

    constructor() {
        this.services = [new ArtClasses()];
    }

}
