/**
 * Created by sanitizer on 7/15/17.
 */
import {bindable, inject} from "aurelia-framework";
import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {I18N} from "aurelia-i18n";
import {LANG_CHANGED} from "../../lang/model/constants";

@inject(I18N, EventAggregator)
export class Event {

    @bindable text: string;
    @bindable times: string[];
    nameKeyPart: string;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea, eventName:string) {
        this.ea = ea;
        this.i18n = i18n;
        this.nameKeyPart = eventName;
        this.setLocalizedStrings();
        this.subscribe();
    }

    setLocalizedStrings() {
        this.text = this.i18n.tr(this.getTextKey());
        this.times = this.i18n.tr(this.getTimesKey()).split(",");
    }

    getTextKey(): string {
        return "events:" + this.nameKeyPart + "/text";
    }

    getTimesKey(): string {
        return "events:" + this.nameKeyPart + "/times";
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