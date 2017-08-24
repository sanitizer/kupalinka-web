import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text: string;

  constructor() {}

  ngOnInit() {
    this.text = "Welcome to Kupalinka ADC";
  }

}
