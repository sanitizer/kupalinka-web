import { Component, OnInit } from '@angular/core';
import {Picture} from "../../common/model/picture";
import {BASE_IMAGES_PATH} from "../../../consts";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  lText: string;
  sText: string;
  pic: Picture;

  constructor() { }

  ngOnInit() {
    this.lText = "Kupalinka";
    this.sText = "Adult Daycare Center";
    this.pic = new Picture(BASE_IMAGES_PATH + "misc/sign.jpg")
  }

}
