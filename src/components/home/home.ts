/**
 * Created by sanitizer on 7/14/17.
 */
import {I18N} from "aurelia-i18n";
import {inject} from 'aurelia-framework';

@inject(I18N)
export class Home {

    data: Array<string>;

    constructor(i18n) {
        this.data = i18n.tr("homeText").split("\n");
    }

}