/**
 * Created by sanitizer on 7/14/17.
 */
import {Input} from "@angular/core";

export class Picture {

    @Input() path: string;
    @Input() description: string;

    constructor(path: string, description: string = "") {
        this.path = path;
        this.description = description;
    }

}
