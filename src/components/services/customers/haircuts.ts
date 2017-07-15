/**
 * Created by sanitizer on 7/14/17.
 */

export class Haircuts implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Haircuts";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "We do cut your hair from time to time.";
    }

}