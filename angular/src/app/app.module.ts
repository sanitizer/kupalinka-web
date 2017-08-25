import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import {UserService} from "./user.service";
import { TabsComponent } from './components/tabs/tabs.component';
import {LoginGuard} from "./login.guard";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdButtonModule, MdCardModule, MdHeaderCell, MdIconModule, MdMenuModule, MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import {ROUTES_MODULE} from "./components/tabs/model/routes";
import {ContactModule} from "./modules/contact/contact.module";
import {GalleryModule} from "./modules/gallery/gallery.module";
import {HomeModule} from "./modules/home/home.module";
import {StaffModule} from "./modules/staff/staff.module";
import {ServicesModule} from "./modules/services/services.module";
import {SharedModule} from "./modules/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    ROUTES_MODULE,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    ContactModule,
    GalleryModule,
    HomeModule,
    StaffModule,
    ServicesModule,
    SharedModule
  ],
  providers: [
    UserService,
    LoginGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
