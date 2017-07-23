import {bindable, inject} from "aurelia-framework";
import {I18N} from "aurelia-i18n";
import {Language} from "./model/language";

@inject(I18N)
export class LanguagePicker {

    @bindable dropDownText: string;
    @bindable languages: Array<Language>;
    @bindable selectedLang: Language;

    constructor(i18n) {
        this.dropDownText = i18n.tr(this.getDropDownTextKey());
        this.selectedLang = new Language("en", "English");
        this.languages = [this.selectedLang,
                          new Language("ru", "Russian")];
    }

    private getDropDownTextKey():string {
        return "dropDownText";
    }

}