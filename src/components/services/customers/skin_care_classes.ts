/**
 * Created by sanitizer on 7/14/17.
 */

export class SkinCareClass implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Skin Care Class";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "We teach you how to care of your skin.";
    }

}