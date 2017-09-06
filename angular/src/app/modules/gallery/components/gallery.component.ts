import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../../services/language.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  text: string;

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.text = "This is gallery";
  }

}
