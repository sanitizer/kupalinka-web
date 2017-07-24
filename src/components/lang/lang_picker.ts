import {bindable, inject} from "aurelia-framework";
import {I18N} from "aurelia-i18n";
import {Language} from "./model/language";

@inject(I18N)
export class LanguagePicker {

    @bindable({defaultValue: "", name: "dropDownText"}) dropDownText: string;
    @bindable({defaultValue: "", name: "languages"}) languages: Array<Language>;
    @bindable({defaultValue: "", name: "selectedLang"}) selectedLang: Language;

    constructor(i18n) {
        this.dropDownText = i18n.tr(this.getDropDownTextKey());
        this.languages = [new Language("en", "English"),
                          new Language("ru", "Russian")];
    }

    private getDropDownTextKey():string {
        return "dropDownText";
    }

    selectedLangChanged(newVal) {
        console.log("got it");
        console.log(this.selectedLang);
    }

}