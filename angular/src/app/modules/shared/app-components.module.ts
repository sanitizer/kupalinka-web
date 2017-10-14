import {NgModule} from "@angular/core";
import {ContactModule} from "../contact/contact.module";
import {ServicesModule} from "../services/services.module";
import {GalleryModule} from "../gallery/gallery.module";
import {HomeModule} from "../home/home.module";
import {StaffModule} from "../staff/staff.module";
import {SharedModule} from "./shared.module";

@NgModule({
  exports: [
    ContactModule,
    GalleryModule,
    HomeModule,
    StaffModule,
    ServicesModule,
    SharedModule
  ]
})
export class AppComponentsModule { }
