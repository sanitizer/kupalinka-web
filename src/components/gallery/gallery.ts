import {Picture} from "../../resources/model/picture";
import {BASE_GALLERY_DIR} from "./constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class Gallery {

    pics: Array<Picture>;

    constructor() {
        this.pics = [new Picture(BASE_GALLERY_DIR + "/pic.jpg", "Some Pic"),
                     new Picture(BASE_GALLERY_DIR + "/pic.jpg", "Some Pic, but another"),
                     new Picture(BASE_GALLERY_DIR + "/pic.jpg", "Even better pic"),
                     new Picture(BASE_GALLERY_DIR + "/pic.jpg", "Amazing pic"),
                     new Picture(BASE_GALLERY_DIR + "/pic.jpg", "Hahaha pic"),
                     new Picture(BASE_GALLERY_DIR + "/pic.jpg", "Pic pic pic"),
                     new Picture(BASE_GALLERY_DIR + "/pic.jpg", "A pic is a pic"),
                     new Picture(BASE_GALLERY_DIR + "/pic.jpg", "Well you know pic"),
                     new Picture(BASE_GALLERY_DIR + "/pic.jpg", "Another pic"),
                     new Picture(BASE_GALLERY_DIR + "/pic.jpg", "Another pic")];
    }

}