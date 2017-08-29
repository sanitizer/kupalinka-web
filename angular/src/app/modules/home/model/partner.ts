import {Picture} from "../../../components/common/model/picture";

export class Partner {

    refs: string;
    pic: Picture;
    name?: string;

    constructor(refs: string, pic: Picture, name = "") {
        this.refs = refs;
        this.name = name;
        this.pic = pic;
    }

}
