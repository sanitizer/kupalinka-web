/**
 * Created by sanitizer on 7/14/17.
 */

export class MassageTherapist implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Massage Therapist";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "We have a massage therapist stopping by from time to time.";
    }

}