import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../components/common/header/header.component";
import {HeaderDirective} from "../../components/common/header-directive/header.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    HeaderDirective
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    HeaderDirective
  ]
})
export class SharedModule { }
