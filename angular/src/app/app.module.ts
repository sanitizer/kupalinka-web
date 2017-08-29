import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabsComponent } from './components/tabs/tabs.component';
import {LoginGuard} from "./login.guard";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdButtonModule, MdCardModule, MdIconModule, MdMenuModule, MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import {ROUTES_MODULE} from "./components/tabs/model/routes";
import {ContactModule} from "./modules/contact/contact.module";
import {GalleryModule} from "./modules/gallery/gallery.module";
import {HomeModule} from "./modules/home/home.module";
import {StaffModule} from "./modules/staff/staff.module";
import {ServicesModule} from "./modules/services/services.module";
import {SharedModule} from "./modules/shared/shared.module";
import { SelectLanguageComponent } from './components/tabs/select-language/select-language.component';
import { CompanyComponent } from './components/tabs/company/company.component';
import {RoutesComponent} from "./components/tabs/routes/routes.component";
import {LanguageService} from "./services/language.service";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TabsComponent,
    SelectLanguageComponent,
    CompanyComponent,
    RoutesComponent
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
    LoginGuard,
    LanguageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
