import {bindable, inject} from "aurelia-framework";
import {I18N} from "aurelia-i18n";
import {Language} from "./model/language";
import {EventAggregator} from "aurelia-event-aggregator";
import {LANG_CHANGED} from "./model/constants";
import {Localized} from "../../resources/model/localized";

@inject(I18N, EventAggregator)
export class LanguagePicker implements Localized{

    @bindable dropDownText: string;
    @bindable languages: Array<Language>;
    @bindable selectedLang: Language;
    ea: EventAggregator;
    i18n: I18N;

    constructor(i18n, ea) {
        this.i18n = i18n;
        this.ea = ea;
        this.setLocalizedStrings();
        this.languages = [new Language("en", "English"),
                          new Language("ru", "Russian")];
    }

    private getDropDownTextKey():string {
        return "dropDownText";
    }

    selectedLangChanged(newVal) {
        this.publishSelectedLang();
    }

    attached() {
        this.publishSelectedLang();
    }

    private publishSelectedLang() {
        this.ea.publish(LANG_CHANGED, this.selectedLang);
        this.resetLocale();
    }

    private resetLocale(){
        this.i18n.setLocale(this.selectedLang.locale);
        this.setLocalizedStrings();
    }

    setLocalizedStrings() {
        this.dropDownText = this.i18n.tr(this.getDropDownTextKey());
    }

}