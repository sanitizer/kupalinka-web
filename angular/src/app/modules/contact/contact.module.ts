import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact.component';
import {SharedModule} from "../shared/shared.module";
import {ContactRoutingModule} from "./contact-routing.module";
import { ContactTextComponent } from './components/contact-text/contact-text.component';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent,
    ContactTextComponent
  ]
})
export class ContactModule { }
