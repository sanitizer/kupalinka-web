import {Address} from "./model/address";
import {I18N} from "aurelia-i18n";
import {inject} from 'aurelia-framework';

/**
 * Created by sanitizer on 7/14/17.
 */
@inject(I18N)
export class Contact {

    mainHeader: string;
    text: string;
    addresses: Array<Address>;
    i18n: I18N;

    constructor(i18n) {
        this.i18n = i18n;
        this.mainHeader = this.i18n.tr(this.getHeaderKey());
        this.text = this.i18n.tr(this.getTextKey());
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

}