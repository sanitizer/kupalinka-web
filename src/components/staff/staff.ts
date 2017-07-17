import {Employee} from "../../resources/model/employee";
import {AlenaVolchak} from "./employees/employee1";
import {IrinaLastName} from "./employees/employee2";
/**
 * Created by sanitizer on 7/14/17.
 */

export class Staff {

    employees: Array<Employee>;

    constructor() {
        this.employees = [new AlenaVolchak(),
                          new IrinaLastName()];
    }

}