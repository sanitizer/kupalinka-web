import {Employee} from "./employee";
import {AlenaVolchak} from "./employees/employee1";
import {IrinaMonosova} from "./employees/employee2";
/**
 * Created by sanitizer on 7/14/17.
 */

export class Staff {

    employees: Array<Employee>;

    constructor() {
        this.employees = [new AlenaVolchak(),
                          new IrinaMonosova()];
    }

}