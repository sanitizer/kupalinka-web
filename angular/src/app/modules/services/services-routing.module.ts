import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ServicesComponent} from "./components/services/services.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "services", component: ServicesComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ServicesRoutingModule {}
