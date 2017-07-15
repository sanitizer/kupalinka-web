/**
 * Created by sanitizer on 7/14/17.
 */

export class Karaoke implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Karaoke";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "We also sing. Like proooooossss!!!";
    }

}