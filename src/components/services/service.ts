import {DataFormat} from "../../resources/model/data_format";
import {loadDataFromFile} from "../../resources/utils/common";

/**
 * Created by sanitizer on 7/14/17.
 */

export class Service implements DataFormat {

    name: string;
    mainHeader: string;
    mainText: string;
    dividerText: string;
    partialData: string;
    data: string;

    constructor(){
        this.mainHeader = this.getMainHeader();
        this.mainText = this.getMainText();
        this.dividerText = this.getDividerText();
        this.data = loadDataFromFile(this.getDataPath());
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

    getMainHeader(): string {
        return "";
    }

    getDividerText(): string {
        return "";
    }

    getMainText(): string {return "";}

    getDataPath(): string {
        return "";
    }

    onClick() {
        alert(this.getData());
    }

}