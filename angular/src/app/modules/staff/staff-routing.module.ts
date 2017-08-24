import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {StaffComponent} from "./components/staff.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "staff", component: StaffComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StaffRoutingModule {}
