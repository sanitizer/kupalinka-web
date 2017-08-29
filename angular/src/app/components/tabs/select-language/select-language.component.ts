import {Component, OnInit} from '@angular/core';
import {Language} from "../model/language";

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent implements OnInit {

  dropDownLabel: string;
  languages: Array<Language>;
  selectedLang: Language;

  constructor() { }

  ngOnInit() {
    this.dropDownLabel = "Language";
    this.languages = [new Language("en", "English"),
                      new Language("ru", "Russian")];
  }

}
