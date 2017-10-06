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
    @bindable splitter: string;
    @bindable events: Array<Event> = [];
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea) {
        this.i18n = i18n;
        this.ea = ea;
        this.events = [new Event(this.i18n, this.ea, "exhibition")];
        this.setLocalizedStrings();
    }

    private getHeaderKey(): string {
        return "events:mainHeader";
    }

    private getTextKey(): string {
        return "events:text";
    }

    private getSplitterKey(): string {
        return "events:splitter";
    }

    setLocalizedStrings() {
        this.mainHeader = this.i18n.tr(this.getHeaderKey());
        this.splitter = this.i18n.tr(this.getSplitterKey());
        if (this.events.length == 0) {
            this.text = this.i18n.tr(this.getTextKey());
            this.splitter = "";
        }
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