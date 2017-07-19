import {DataFormat} from "../../resources/model/data_format";
import {I18N} from "aurelia-i18n";
import {bindable} from "aurelia-templating";

/**
 * Created by sanitizer on 7/14/17.
 */
export class Service implements DataFormat {

    @bindable name: string;
    @bindable partialData: string;
    @bindable data: string;
    i18n: I18N;

    constructor(i18n){
        this.i18n = i18n;
        this.name = this.i18n.tr(this.getNameKey());
        this.data = this.i18n.tr(this.getDataKey());
        this.partialData = this.getPartOfData();
    }

    getPartOfData(): string {
        return this.showFullData() ? this.getData() : this.getData().substring(0, this.getMaxDescrSize()/2) + "...";
    }

    getData(): string {
        return this.data;
    }

    getMaxDescrSize(): number {
        return 100;
    }

    showFullData(): boolean {
        return this.getData().length <= this.getMaxDescrSize();
    }

    getDataPath(): string {
        return "";
    }

    getDataKey(): string {
        return "";
    }

    getNameKey(): string {
        return "";
    }

    onClick() {
        alert(this.getData());
    }

}