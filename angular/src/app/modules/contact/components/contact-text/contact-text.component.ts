import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-text',
  templateUrl: './contact-text.component.html',
  styleUrls: ['./contact-text.component.css']
})
export class ContactTextComponent implements OnInit {

  hText: string;
  text: string;

  constructor() { }

  ngOnInit() {
    this.hText = "We are here to help - Contact us";
    this.text = "Give us a call, send an email, or drop by to have a conversation. We are here to help out in whatever way we can.";
  }

}
