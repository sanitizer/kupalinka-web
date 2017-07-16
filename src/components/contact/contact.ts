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
        this.addresses = [new Address("Main Office", "Mississippi st.", "9am-3pm Monday-Friday", "xxx-xxx-xxxx", "kupalinka@mail.com")];
    }

    private getMainHeader(): string {
        return "We are here to help - Contact us";
    }

    private getText(): string {
        return "Give us a call, send an email, or drop by to have a conversation. We are here to help out in whatever way we can.";


    }

}