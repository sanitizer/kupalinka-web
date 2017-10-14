import {
  MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import {NgModule} from "@angular/core";

@NgModule({
    exports: [
      MdButtonModule,
      MdCardModule,
      MdMenuModule,
      MdToolbarModule,
      MdIconModule,
      MdTabsModule
    ]
  }
)
export class SharedMaterialImportsModule { }
