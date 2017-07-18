import {Picture} from "../../../resources/model/picture";
import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class FieldTrips extends Service {
    pic: Picture;

    constructor() {
        super();
        this.name = "Field Trips";
        this.pic = new Picture(BASE_SERVICES_DIR + "pic.jpg");
    }

    getDescription() {
        return "We go to museums, concerts, movies.";
    }

}