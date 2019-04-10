import { NgModule } from '@angular/core';
import { ServicesComponent } from './components/services.component';
import {SharedModule} from "../shared/shared.module";
import {ServicesRoutingModule} from "./services-routing.module";
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    SharedModule,
    ServicesRoutingModule
  ],
  declarations: [
    ServicesComponent,
    CardComponent
  ]
})
export class ServicesModule { }
