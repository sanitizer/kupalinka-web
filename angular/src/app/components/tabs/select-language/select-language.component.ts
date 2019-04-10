import {Component, OnInit} from '@angular/core';
import {Language} from "../model/language";
import {LanguageService} from "../../../services/language.service";

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent implements OnInit {

  dropDownLabel: string;
  selectedLang: Language;

  constructor(public langService: LanguageService) { }

  ngOnInit() {
    this.dropDownLabel = "Language";
    this.selectedLang = this.langService.getSelectedLanguage();
  }

  langChange(): void {
    this.langService.setSelectedLanguage(this.selectedLang);
  }

}
