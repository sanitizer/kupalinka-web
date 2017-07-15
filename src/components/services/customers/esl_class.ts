/**
 * Created by sanitizer on 7/14/17.
 */

export class EslClass implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "ESL Class";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "This is the ESL class. We study English as a second language.";
    }

}
