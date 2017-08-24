import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
    this.text = "This is services";
  }

}
