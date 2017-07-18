import {Picture} from "../../../resources/model/picture";
import {Employee} from "../employee";
import {BASE_EMPLOYEES_DIR} from "./constants";

/**
 * Created by sanitizer on 7/17/17.
 */

export class AlenaVolchak extends Employee {
    pic: Picture;

    constructor() {
        super();
        this.name = "Alena Volchak";
        this.position = "Entertainment Director";
        this.pic = new Picture(BASE_EMPLOYEES_DIR + "pic.jpg");
    }

    getDescription(): string{
        return "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
            "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
            "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
            "i work here. yes i work here. ";
    }

}