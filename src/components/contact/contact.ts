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
    @bindable phoneT: string;
    @bindable faxT: string;
    @bindable emailT: string;
    @bindable officeHoursT: string;
    @bindable addresses: Array<Address>;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea) {
        this.i18n = i18n;
        this.ea = ea;
        this.setLocalizedStrings();
        this.addresses = [new Address(i18n,
                                      ea,
                                      "Main Office",
                                      "12597 E Mississippi Ave, Unit# 300, Aurora, Co, 80012",
                                      "303-386-4508",
                                      "xxx-xxx-xxxx",
                                      "kupalinkaadc@gmail.com")];
    }

    private getHeaderKey(): string {
        return "cont:contactHeader";
    }

    private getTextKey(): string {
        return "cont:contactText";
    }

    private getPhoneKey(): string {
        return "cont:phone";
    }

    private getFaxKey(): string {
        return "cont:fax";
    }

    private getEmailKey(): string {
        return "cont:email";
    }

    private getOfficeHoursKey(): string {
        return "cont:officeHours";
    }

    setLocalizedStrings() {
        this.mainHeader = this.i18n.tr(this.getHeaderKey());
        this.text = this.i18n.tr(this.getTextKey());
        this.phoneT = this.i18n.tr(this.getPhoneKey());
        this.faxT = this.i18n.tr(this.getFaxKey());
        this.emailT = this.i18n.tr(this.getEmailKey());
        this.officeHoursT = this.i18n.tr(this.getOfficeHoursKey());
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