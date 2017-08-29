import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  lText: string;
  sText: string;

  constructor() { }

  ngOnInit() {
    this.lText = "Kupalinka";
    this.sText = "Adult Daycare Center";
  }

}
