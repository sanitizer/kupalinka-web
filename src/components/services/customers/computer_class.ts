/**
 * Created by sanitizer on 7/14/17.
 */

export class ComputerClass implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Computer Class";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "This is the computer class. We study computers.";
    }

}