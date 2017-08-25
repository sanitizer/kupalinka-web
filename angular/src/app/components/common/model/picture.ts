/**
 * Created by sanitizer on 7/14/17.
 */

export class Picture {

    path: string;
    description: string;

    constructor(path: string, description: string = "") {
        this.path = path;
        this.description = description;
    }

}
