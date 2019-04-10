import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../../services/language.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  text: string;

  constructor(private langSerice: LanguageService) { }

  ngOnInit() {
    this.text = "This is services";
  }

}
