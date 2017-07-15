/**
 * Created by sanitizer on 7/14/17.
 */

export class Bioceramics implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Bioceramics";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "We do whatever bioceramics is. Cool isnt it?";
    }

}