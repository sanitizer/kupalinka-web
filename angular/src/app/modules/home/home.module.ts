import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home.component';
import {SharedModule} from "../shared/shared.module";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeTextComponent} from './components/home-text/home-text.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeTextComponent
  ]
})
export class HomeModule { }
