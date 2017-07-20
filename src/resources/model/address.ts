/**
 * Created by sanitizer on 7/15/17.
 */

export class Address {

    name: string;
    street: string;
    officeHours: string;
    phoneNum: string;
    fax: string;
    email: string;

    constructor(name: string, street: string, officeHours: string, phoneNum: string, fax: string, email: string) {
        this.name = name;
        this.street = street;
        this.officeHours = officeHours;
        this.phoneNum = phoneNum;
        this.fax = fax;
        this.email = email;
    }

}