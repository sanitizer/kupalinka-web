import { Component, OnInit } from '@angular/core';
import {Partner} from "../../model/partner";
import {Picture} from "../../../../components/common/model/picture";
import {BASE_IMAGES_PATH} from "../../../../consts";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  hText: string;
  partners: Partner[];

  constructor() { }

  ngOnInit() {
    this.hText = "PARTNERS:";
    this.partners = [new Partner("http://www.ave-tours.com", new Picture(BASE_IMAGES_PATH + "misc/ave-tours-ico.ico"))];
  }

}
