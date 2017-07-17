import {Employee} from "../../../resources/model/employee";
import {Picture} from "../../../resources/model/picture";
import {BASE_EMPLOYEES_DIR} from "./constants";

/**
 * Created by sanitizer on 7/17/17.
 */

export class IrinaLastName implements Employee {
    name: string;
    description: string;
    pic: Picture;

    constructor() {
        this.name = "Irina LastName";
        this.description = this.getDescription();
        this.pic = new Picture(BASE_EMPLOYEES_DIR + "pic.jpg");
    }

    private getDescription(): string{
        return "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. ";
    }

}