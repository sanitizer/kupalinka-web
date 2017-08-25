import {NgModule} from '@angular/core';
import {ContactComponent} from './components/contact.component';
import {SharedModule} from "../shared/shared.module";
import {ContactRoutingModule} from "./contact-routing.module";
import {ContactTextComponent} from './components/contact-text/contact-text.component';
import {ContactAddressComponent} from './components/contact-address/contact-address.component';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent,
    ContactTextComponent,
    ContactAddressComponent
  ]
})
export class ContactModule {
}
