/**
 * Created by sanitizer on 7/14/17.
 */

export class FieldTrips implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Field Trips";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "We go to museums, concerts, movies.";
    }

}