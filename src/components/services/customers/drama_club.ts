import {Picture} from "../../../resources/model/picture";
import {Service} from "../service";
import {BASE_DATA_DIR, BASE_SERVICES_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class DramaClub extends Service {
    pic: Picture;

    constructor(i18n) {
        super(i18n);
        this.name = "Drama Club";
        this.pic = new Picture(BASE_SERVICES_DIR + "pic.jpg");
    }

    getDataPath(): string {
        return BASE_DATA_DIR + "drama_club.txt";
    }

}