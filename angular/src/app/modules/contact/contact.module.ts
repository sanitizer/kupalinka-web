import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import {SharedModule} from "../shared/shared.module";
import {ContactRoutingModule} from "./contact-routing.module";

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
