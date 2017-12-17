/**
 * Created by sanitizer on 7/15/17.
 */
import {bindable, inject} from "aurelia-framework";
import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {I18N} from "aurelia-i18n";
import {LANG_CHANGED} from "../../lang/model/constants";
import {TimeDescription} from "./time_description";

@inject(I18N, EventAggregator)
export class Event {

    @bindable text: string[];
    @bindable times: TimeDescription[] = [];
    @bindable admission: string;
    @bindable eventIsToday: boolean;
    @bindable expired: boolean;
    nameKeyPart: string;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea, eventName:string) {
        this.ea = ea;
        this.i18n = i18n;
        this.nameKeyPart = eventName;
        this.setDates();
        this.setLocalizedStrings();
        this.subscribe();
    }

    setDates() {
        let today = new Date();
        let expirationDate = new Date(this.i18n.tr(this.getExpirationDateKey()));
        this.expired = expirationDate.getFullYear() < today.getFullYear() ||
            (expirationDate.getFullYear() === today.getFullYear() && expirationDate.getMonth() < today.getMonth()) ||
            (expirationDate.getFullYear() === today.getFullYear() && expirationDate.getMonth() === today.getMonth() && expirationDate.getDate() < today.getDate());
    }

    setLocalizedStrings() {
        this.times = [];
        this.text = this.i18n.tr(this.getTextKey()).split("\n");
        this.admission = this.i18n.tr(this.getAdmissionKey());
        let dates = this.i18n.tr(this.getDatesKey()).split(";");
        let timesFromFile = this.i18n.tr(this.getTimesKey()).split(",");

        if (dates.length != timesFromFile.length) {
            return
        }

        timesFromFile.forEach((time, index) => {
            this.times.push(new TimeDescription(time, new Date(dates[index])));
        });
    }

    getTextKey(): string {
        return "events:" + this.nameKeyPart + "/text";
    }

    getDatesKey(): string {
        return "events:" + this.nameKeyPart + "/dates";
    }

    getExpirationDateKey(): string {
        return "events:" + this.nameKeyPart + "/eventExpirationDate";
    }

    getTimesKey(): string {
        return "events:" + this.nameKeyPart + "/times";
    }

    getAdmissionKey(): string {
        return "events:" + this.nameKeyPart + "/admission";
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