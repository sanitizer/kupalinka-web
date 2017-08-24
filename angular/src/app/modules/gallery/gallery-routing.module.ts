import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {GalleryComponent} from "./components/gallery.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: "gallery", component: GalleryComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GalleryRoutingModule {}
