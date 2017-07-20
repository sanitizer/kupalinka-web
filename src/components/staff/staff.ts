import {Employee} from "./employee";
import {AlenaVolchak} from "./employees/employee1";
import {IrinaMonosova} from "./employees/employee2";
import {I18N} from "aurelia-i18n";
import {inject} from 'aurelia-framework';

/**
 * Created by sanitizer on 7/14/17.
 */
@inject(I18N)
export class Staff {

    employees: Array<Employee>;

    constructor(i18n) {
        this.employees = [new AlenaVolchak(i18n),
                          new IrinaMonosova(i18n)];
    }

}