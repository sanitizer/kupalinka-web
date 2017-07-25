/**
 * Created by sanitizer on 7/14/17.
 */
import {I18N} from "aurelia-i18n";
import {inject, bindable} from "aurelia-framework";
import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {LANG_CHANGED} from "../../components/lang/model/constants";

@inject(I18N, EventAggregator)
export class Picture {

    @bindable path: string;
    @bindable description?: string;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea, path: string, description: string = "") {
        this.ea = ea;
        this.i18n = i18n;
        this.path = path;
        this.setLocalizedStrings();
        this.subscribe();
    }

    setLocalizedStrings() {
        console.log(this.getDescKey());
        this.description = this.i18n.tr(this.getDescKey());
    }

    getDescKey(): string {
        return "pics:" + this.path.replace(".", "_");
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