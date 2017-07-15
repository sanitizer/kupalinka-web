/**
 * Created by sanitizer on 7/14/17.
 */

export class SocialDances implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Social Dances";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "We dance socially.";
    }

}