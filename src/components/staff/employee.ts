import {DataFormat} from "../../resources/model/data_format";
import {I18N} from "aurelia-i18n";
import {Picture} from "../../resources/model/picture";
/**
 * Created by sanitizer on 7/17/17.
 */

export class Employee implements DataFormat {
    name: string;
    data: string;
    position: string;
    pic: Picture;
    i18n: I18N;

    constructor(i18n) {
        this.i18n = i18n;
        this.data = this.i18n.tr(this.getDataKey());
        this.position = this.i18n.tr(this.getPositionKey());
        this.name = this.i18n.tr(this.getNameKey());
        this.pic = this.pic = new Picture(this.getPicPath());
    }

    getPicPath(): string {
        return "";
    }

    getDataKey(): string {
        return "";
    }

    getNameKey(): string {
        return "";
    }

    getPositionKey(): string {
        return "";
    }



}