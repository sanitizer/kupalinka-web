import {Event} from "./model/event";
import {I18N} from "aurelia-i18n";
import {inject} from 'aurelia-framework';
import {bindable} from "aurelia-templating";
import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {LANG_CHANGED} from "../lang/model/constants";
import {Localized} from "../../resources/model/localized";

/**
 * Created by sanitizer on 7/14/17.
 */
@inject(I18N, EventAggregator)
export class Events implements Localized {

    @bindable mainHeader: string;
    @bindable text: string;
    @bindable scheduleHeader: string;
    @bindable admissionHeader: string;
    @bindable events: Array<Event> = [];
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea) {
        this.i18n = i18n;
        this.ea = ea;
        this.events = [new Event(this.i18n, this.ea, "exhibition"),
                       new Event(this.i18n, this.ea, "tour"),
                       new Event(this.i18n, this.ea, "russianChristmas")];
        this.setLocalizedStrings();
    }

    private getHeaderKey(): string {
        return "events:mainHeader";
    }

    private getTextKey(): string {
        return "events:text";
    }

    private getScheduleHeaderKey(): string {
        return "events:scheduleHeader";
    }

    private getAdmissionHeaderKey(): string {
        return "events:admissionHeader";
    }

    setLocalizedStrings() {
        this.mainHeader = this.i18n.tr(this.getHeaderKey());
        this.scheduleHeader = this.i18n.tr(this.getScheduleHeaderKey());
        this.admissionHeader = this.i18n.tr(this.getAdmissionHeaderKey());
        if (this.events.length === 0 || this.allEventsAreExpired()) {
            this.text = this.i18n.tr(this.getTextKey());
        }
    }

    allEventsAreExpired(): boolean {
        for (let event of this.events) {
            if (!event.expired) {
                return false;
            }
        }

        return true;
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