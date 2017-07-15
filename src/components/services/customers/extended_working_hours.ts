/**
 * Created by sanitizer on 7/14/17.
 */

export class ExtendedWorkingHours implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Extended Working Hours";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "We work long and hard for you.";
    }

}