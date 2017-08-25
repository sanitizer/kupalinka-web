import {Component, OnInit} from '@angular/core';
import {Address} from "../../model/address";

@Component({
  selector: 'app-contact-address',
  templateUrl: './contact-address.component.html',
  styleUrls: ['./contact-address.component.css']
})
export class ContactAddressComponent implements OnInit {

  addresses: Address[];

  constructor() {}

  ngOnInit() {
    this.addresses = [new Address("Main Office",
                                  "12597 E Mississippi Ave, Unit# 300, Aurora, Co, 80012",
                                  "9am - 5pm, Monday-Friday",
                                  "303-386-4508",
                                  "720-379-7553",
                                  "kupalinkaadc@gmail.com")];
  }

}
