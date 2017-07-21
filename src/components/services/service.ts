import {DataFormat} from "../../resources/model/data_format";
import {I18N} from "aurelia-i18n";
import {bindable} from "aurelia-templating";
import {Picture} from "../../resources/model/picture";

/**
 * Created by sanitizer on 7/14/17.
 */
export class Service implements DataFormat {

    @bindable name: string;
    @bindable partialData: string;
    @bindable data: Array<string>;
    rawData: string;
    @bindable pic: Picture;
    i18n: I18N;

    constructor(i18n){
        this.i18n = i18n;
        this.name = this.i18n.tr(this.getNameKey());
        this.rawData = this.i18n.tr(this.getDataKey());
        this.data = this.rawData.split("\n");
        this.partialData = this.getPartOfData();
        this.pic = new Picture(this.getPicPath());
    }

    protected getPartOfData(): string {
        return this.showFullData() ? this.getData() : this.getData().substring(0, this.getMaxDescrSize()/2) + "...";
    }

    getData(): string {
        return this.rawData;
    }

    protected getMaxDescrSize(): number {
        return 100;
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

}