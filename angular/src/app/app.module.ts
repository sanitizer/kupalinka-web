import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {LoginGuard} from "./login.guard";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ROUTES_MODULE} from "./components/tabs/model/routes";
import {SelectLanguageComponent} from './components/tabs/select-language/select-language.component';
import {CompanyComponent} from './components/tabs/company/company.component';
import {RoutesComponent} from "./components/tabs/routes/routes.component";
import {LanguageService} from "./services/language.service";
import {SharedMaterialImportsModule} from "./modules/shared/material.module";
import {AppComponentsModule} from "./modules/shared/app-components.module";


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
    AppComponentsModule,
    SharedMaterialImportsModule
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
