/**
 * Created by sanitizer on 7/14/17.
 */
import {I18N} from "aurelia-i18n";
import {inject, bindable} from 'aurelia-framework';
import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {LANG_CHANGED} from "../lang/model/constants";
import {Localized} from "../../resources/model/localized";
import {Partner} from "./model/partner";
import {Picture} from "../../resources/model/picture";

@inject(I18N, EventAggregator)
export class Home implements Localized {

    @bindable data: Array<string>;
    @bindable header: Array<string>;
    @bindable partnersHeader: string;
    @bindable partners: Array<Partner>;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea) {
        this.i18n = i18n;
        this.ea = ea;
        this.setLocalizedStrings();
        this.partners = [new Partner("http://www.ave-tours.com", new Picture(this.i18n, ea, "images/misc/ave-tours-ico.ico"))];
    }

    setLocalizedStrings() {
        this.data = this.i18n.tr("home:homeText").split("\n");
        this.header = this.i18n.tr("home:homeHeader").split("\n");
        this.partnersHeader = this.i18n.tr("home:partnersHeader");
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