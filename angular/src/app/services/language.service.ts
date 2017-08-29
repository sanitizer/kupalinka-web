import { Injectable } from '@angular/core';
import {Language} from "../components/tabs/model/language";

@Injectable()
export class LanguageService {

  public languages: Language[] = [new Language("en", "English"),
                                         new Language("ru", "Russian")];
  selectedLanguage: Language;

  constructor() {
    this.selectedLanguage = this.languages[0];
  }

  getSelectedLanguage(): Language {
    return this.selectedLanguage;
  }

  setSelectedLanguage(selectedLang: Language): void {
    this.selectedLanguage = selectedLang;
  }

}
