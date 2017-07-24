import {DataFormat} from "../../resources/model/data_format";
import {I18N} from "aurelia-i18n";
import {Picture} from "../../resources/model/picture";
import {Subscription, EventAggregator} from "aurelia-event-aggregator";
import {LANG_CHANGED} from "../lang/model/constants";
import {Localized} from "../../resources/model/localized";

/**
 * Created by sanitizer on 7/17/17.
 */

export class Employee implements DataFormat, Localized {
    name: string;
    data: Array<string>;
    position: string;
    pic: Picture;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea) {
        this.i18n = i18n;
        this.ea = ea;
        this.setLocalizedStrings();
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

    setLocalizedStrings() {
        this.data = this.i18n.tr(this.getDataKey()).split("\n");
        this.position = this.i18n.tr(this.getPositionKey());
        this.name = this.i18n.tr(this.getNameKey());
    }

    attached() {
        let curObj = this;
        this.subscriber = this.ea.subscribe(LANG_CHANGED, response => {
            console.log("GOT RESPONSE TO SUBSCRIPTION");
            console.log(response);
            curObj.i18n.setLocale(response.locale);
            curObj.setLocalizedStrings();
        });
    }

    detached() {
        if(this.subscriber){
            this.subscriber.dispose();
        }
    }

    activate() {
        let curObj = this;
        this.subscriber = this.ea.subscribe(LANG_CHANGED, response => {
            curObj.i18n.setLocale(response.locale);
            curObj.setLocalizedStrings();
        });
    }

}