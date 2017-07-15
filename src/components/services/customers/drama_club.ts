/**
 * Created by sanitizer on 7/14/17.
 */

export class DramaClub implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Drama Club";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "Oh yes!!! We have a lot of drama here.";
    }

}