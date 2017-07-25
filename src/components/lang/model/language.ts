import {I18N} from "aurelia-i18n";
import {bindable, inject} from "aurelia-framework";
import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {LANG_CHANGED} from "./constants";

@inject(I18N, EventAggregator)
export class Language {

    @bindable locale: string;
    @bindable displayName: string;
    ea: EventAggregator;
    i18n: I18N;
    subscriber: Subscription;

    constructor(i18n, ea, locale: string, displayName: string) {
        this.i18n = i18n;
        this.ea = ea;
        this.locale = locale;
        this.setLocalizedStrings();
        this.subscribe();
    }

    setLocalizedStrings() {
        this.displayName = this.i18n.tr(this.getLangKey());
    }

    getLangKey() {
        return "home:" + this.locale;
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