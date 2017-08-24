import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
    this.text = "This is contact";
  }

}
