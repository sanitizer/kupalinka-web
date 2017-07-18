import {Picture} from "../../../resources/model/picture";
import {Service} from "../service";
import {BASE_SERVICES_DIR} from "./constants";
import {defaultCoreCipherList} from "constants";
/**
 * Created by sanitizer on 7/14/17.
 */

export class ArtClasses extends Service {
    pic: Picture;

    constructor() {
        super();
        this.name = "Art Classes";
        this.pic = new Picture(BASE_SERVICES_DIR + "pic.jpg");
    }

    getDescription() {
        return "dghgfdl; hgd ;hg sdl;ahg ;sldhglsdhgl;sdhgsd hld fshf dsjkjsdhgs hgsdklgh ssldkghhsd kgjh dslkghd lkjh kjn ngjkndkgjndkjgh gdh dng d nd nd dn ndknsk gj dkdghgfdl; hgd ;hg sdl;ahg ;sldhglsdhgl;sdhgsd hld fshf dsjkjsdhgs hgsdklgh ssldkghhsd kgjh dslkghd lkjh kjn ngjkndkgjndkjgh gdh dng d nd nd dn ndknsk gj dkdghgfdl; hgd ;hg sdl;ahg ;sldhglsdhgl;sdhgsd hld fshf dsjkjsdhgs hgsdklgh ssldkghhsd kgjh dslkghd lkjh kjn ngjkndkgjndkjgh gdh dng d nd nd dn ndknsk gj dk";
    }

}