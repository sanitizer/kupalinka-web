/**
 * Created by sanitizer on 7/14/17.
 */
import {I18N} from "aurelia-i18n";
import {inject, bindable} from 'aurelia-framework';
import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {LANG_CHANGED} from "../lang/model/constants";
import {Localized} from "../../resources/model/localized";

@inject(I18N, EventAggregator)
export class Home implements Localized {

    @bindable data: Array<string>;
    @bindable header: Array<string>;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea) {
        this.i18n = i18n;
        this.ea = ea;
        this.setLocalizedStrings();
    }

    setLocalizedStrings() {
        this.data = this.i18n.tr("homeText").split("\n");
        this.header = this.i18n.tr("homeHeader").split("\n");
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