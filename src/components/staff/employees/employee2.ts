import {Employee} from "../employee";
import {Picture} from "../../../resources/model/picture";
import {BASE_EMPLOYEES_DIR} from "./constants";

/**
 * Created by sanitizer on 7/17/17.
 */

export class IrinaLastName extends Employee {
    pic: Picture;

    constructor() {
        super();
        this.name = "Irina LastName";
        this.position = "Assistant to regional manager";
        this.pic = new Picture(BASE_EMPLOYEES_DIR + "pic.jpg");
    }

    getDescription(): string{
        return "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. es i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. es i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. es i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. ";
    }

}