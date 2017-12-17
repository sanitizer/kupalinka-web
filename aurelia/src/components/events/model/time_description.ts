/**
 * Created by sanitizer on 12/17/17.
 */
import {bindable} from "aurelia-framework";

export class TimeDescription {

    @bindable display: string;
    @bindable isToday: boolean;
    @bindable isFuture: boolean;
    date: Date;

    constructor(display: string, date: Date) {
        this.display = display;
        this.date = date;
        this.setFlags();
    }

    setFlags() {
        let today = new Date();
        this.isToday = this.date.getFullYear() === today.getFullYear() &&
            this.date.getMonth() === today.getMonth() &&
            this.date.getDate() === today.getDate();
        this.isFuture = this.date.getFullYear() > today.getFullYear() ||
            (this.date.getFullYear() === today.getFullYear() && this.date.getMonth() > today.getMonth()) ||
            (this.date.getFullYear() === today.getFullYear() && this.date.getMonth() === today.getMonth() && this.date.getDate() > today.getDate());
    }

}