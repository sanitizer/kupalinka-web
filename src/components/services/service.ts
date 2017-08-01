import {DataFormat} from "../../resources/model/data_format";
import {I18N} from "aurelia-i18n";
import {bindable} from "aurelia-templating";
import {Picture} from "../../resources/model/picture";
import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {LANG_CHANGED} from "../lang/model/constants";

/**
 * Created by sanitizer on 7/14/17.
 */
export class Service implements DataFormat {

    @bindable name: string;
    @bindable data: Array<string>;
    @bindable pic: Picture;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea){
        this.i18n = i18n;
        this.ea = ea;
        this.subscribe();
        this.setLocalizedStrings();
        this.pic = new Picture(i18n, ea, this.getPicPath());
    }

    getDataKey(): string {
        return "";
    }

    getNameKey(): string {
        return "";
    }

    getPicPath(): string {
        return "";
    }

    setLocalizedStrings() {
        this.name = this.i18n.tr(this.getNameKey());
        this.data = this.i18n.tr(this.getDataKey()).split("\n");
    }

    attached() {
        this.subscribe();
    }

    subscribe() {
        let curObj = this;
        this.subscriber = this.ea.subscribe(LANG_CHANGED, response => {
            curObj.i18n.setLocale(response.locale);
            curObj.setLocalizedStrings();
        });
    }

    detached() {
        if(this.subscriber){
            this.subscriber.dispose();
        }
    }

}