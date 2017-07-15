/**
 * Created by sanitizer on 7/14/17.
 */

export class WellnessClasses implements Service {
    name: string;
    description: string;

    constructor() {
        this.name = "Wellness Classes";
        this.description = this.getDescription();
    }

    private getDescription() {
        return "we do that kind of wellness and this kind of wellness. Ex: swimming pool, excercises, good nutrition, vitamins";
    }

}