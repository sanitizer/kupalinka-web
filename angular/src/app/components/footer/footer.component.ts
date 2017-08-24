import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
    this.text = "\u00A9 2017 Kupalinka ADC";
  }

}
