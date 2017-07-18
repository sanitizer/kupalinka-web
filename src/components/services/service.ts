import {DataFormat} from "../../resources/model/data_format";
/**
 * Created by sanitizer on 7/14/17.
 */

export class Service implements DataFormat {
    name: string;
    description: string;

    constructor(){
        this.description = this.getPartOfDescription();
    }

    getPartOfDescription(): string {
        return this.showFullDescr() ? this.getDescription() : this.getDescription().substring(0, this.getMaxDescrSize()/2) + "...";
    }

    getDescription(): string {
        return "";
    }

    getMaxDescrSize(): number {
        return 120;
    }

    showFullDescr(): boolean {
        return this.getDescription().length <= this.getMaxDescrSize();
    }

    onClick() {
        alert(this.getDescription());
    }

}