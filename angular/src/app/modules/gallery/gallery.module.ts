import { NgModule } from '@angular/core';
import {GalleryComponent} from "./components/gallery.component";
import {SharedModule} from "../shared/shared.module";
import {GalleryRoutingModule} from "./gallery-routing.module";

@NgModule({
  imports: [
    SharedModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryComponent
  ]
})
export class GalleryModule { }
