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
    @bindable partialData: string;
    @bindable data: Array<string>;
    @bindable pic: Picture;
    @bindable show: boolean;
    rawData: string;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea){
        this.i18n = i18n;
        this.ea = ea;
        this.subscribe();
        this.setLocalizedStrings();
        this.pic = new Picture(i18n, ea, this.getPicPath());
        this.show = this.showFullData();
    }

    protected getPartOfData(): string {
        return this.showFullData() ? this.getData() : this.getData().substring(0, this.getData().length/2) + "...";
    }

    getData(): string {
        return this.rawData;
    }

    protected getMaxDescrSize(): number {
        return 190;
    }

    protected showFullData(): boolean {
        return this.getData().length <= this.getMaxDescrSize();
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

    onClick() {
        alert(this.getData());
    }

    setLocalizedStrings() {
        this.name = this.i18n.tr(this.getNameKey());
        this.rawData = this.i18n.tr(this.getDataKey());
        this.partialData = this.getPartOfData();
    }

    attached() {
        this.subscribe();
    }

    subscribe() {
        let curObj = this;
        this.subscriber = this.ea.subscribe(LANG_CHANGED, response => {
            curObj.i18n.setLocale(response.locale);
            curObj.setLocalizedStrings();
            curObj.show = curObj.showFullData();
        });
    }


    detached() {
        if(this.subscriber){
            this.subscriber.dispose();
        }
    }

}