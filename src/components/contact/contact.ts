import {Address} from "../../resources/model/address";
/**
 * Created by sanitizer on 7/14/17.
 */

export class Contact {

    mainHeader: string;
    text: string;
    addresses: Array<Address>;

    constructor() {
        this.mainHeader = this.getMainHeader();
        this.text = this.getText();
        this.addresses = [new Address("Main Office",
                                      "12597 E Mississippi Ave, Unit# 300, Aurora, Co, 80012",
                                      "9 am - 5 pm, Monday-Friday",
                                      "303-386-4508",
                                      "xxx-xxx-xxxx",
                                      "kupalinkaadc@gmail.com")];
    }

    private getMainHeader(): string {
        return "We are here to help - Contact us";
    }

    private getText(): string {
        return "Give us a call, send an email, or drop by to have a conversation. We are here to help out in whatever way we can.";


    }

}