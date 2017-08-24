/**
 * Created by sanitizer on 7/15/17.
 */
import {bindable, inject} from "aurelia-framework";
import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {I18N} from "aurelia-i18n";
import {LANG_CHANGED} from "../../lang/model/constants";

@inject(I18N, EventAggregator)
export class Address {

    @bindable name: string;
    nameKeyPart: string;
    @bindable street: string;
    @bindable officeHours: string;
    @bindable phoneNum: string;
    @bindable fax: string;
    @bindable email: string;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea, name:string, street: string, phoneNum: string, fax: string, email: string) {
        this.ea = ea;
        this.i18n = i18n;
        this.nameKeyPart = name;
        this.street = street;
        this.phoneNum = phoneNum;
        this.fax = fax;
        this.email = email;
        this.setLocalizedStrings();
        this.subscribe();
    }

    setLocalizedStrings() {
        this.name = this.i18n.tr(this.getNameKey());
        this.officeHours = this.i18n.tr(this.getHoursKey());
    }

    getNameKey(): string {
        return "cont:" + this.nameKeyPart;
    }

    getHoursKey(): string {
        return "cont:" + this.nameKeyPart + "/hours";
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