import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../../components/common/header/header.component";
import {HeaderDirective} from "../../components/common/header-directive/header.directive";
import {CentralTextDirective} from "../../components/common/central-directives/central-text.directive";
import {CentralHeaderDirective} from "../../components/common/central-directives/central-header.directive";
import {UnderTabsDirective} from "../../components/common/under-tabs-directive/under-tabs.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    HeaderDirective,
    CentralTextDirective,
    CentralHeaderDirective,
    UnderTabsDirective
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    HeaderDirective,
    CentralHeaderDirective,
    CentralTextDirective,
    UnderTabsDirective
  ]
})
export class SharedModule { }
