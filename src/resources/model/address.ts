/**
 * Created by sanitizer on 7/15/17.
 */

export class Address {

    name: string;
    street: string;
    officeHours: string;
    phoneNum: string;
    email: string;

    constructor(name: string, street: string, officeHours: string, phoneNum: string, email: string) {
        this.name = name;
        this.street = street;
        this.officeHours = officeHours;
        this.phoneNum = phoneNum;
        this.email = email;
    }

}