import { NgModule } from '@angular/core';
import { ServicesComponent } from './components/services.component';
import {SharedModule} from "../shared/shared.module";
import {ServicesRoutingModule} from "./services-routing.module";

@NgModule({
  imports: [
    SharedModule,
    ServicesRoutingModule
  ],
  declarations: [
    ServicesComponent
  ]
})
export class ServicesModule { }
