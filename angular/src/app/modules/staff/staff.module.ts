import { NgModule } from '@angular/core';
import {StaffComponent} from "./components/staff.component";
import {SharedModule} from "../shared/shared.module";
import {StaffRoutingModule} from "./staff-routing.module";

@NgModule({
  imports: [
    SharedModule,
    StaffRoutingModule
  ],
  declarations: [
    StaffComponent
  ]
})
export class StaffModule { }
