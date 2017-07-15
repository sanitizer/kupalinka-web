/**
 * Created by sanitizer on 7/14/17.
 */

export class ArtClasses implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Art Classes";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "We do art. Impressed?";
    }

}