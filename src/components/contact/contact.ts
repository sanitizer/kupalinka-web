import {Address} from "./model/address";
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
export class Contact implements Localized {

    @bindable mainHeader: string;
    @bindable text: string;
    @bindable addresses: Array<Address>;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea) {
        this.i18n = i18n;
        this.ea = ea;
        this.setLocalizedStrings();
        this.addresses = [new Address("Main Office",
                                      "12597 E Mississippi Ave, Unit# 300, Aurora, Co, 80012",
                                      "9 am - 5 pm, Monday-Friday",
                                      "303-386-4508",
                                      "xxx-xxx-xxxx",
                                      "kupalinkaadc@gmail.com")];
    }

    private getHeaderKey(): string {
        return "contactHeader";
    }

    private getTextKey(): string {
        return "contactText";
    }

    setLocalizedStrings() {
        this.mainHeader = this.i18n.tr(this.getHeaderKey());
        this.text = this.i18n.tr(this.getTextKey());
    }

    attached() {
        let curObj = this;
        this.subscriber = this.ea.subscribe(LANG_CHANGED, response => {
            console.log("GOT RESPONSE TO SUBSCRIPTION");
            console.log(response);
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