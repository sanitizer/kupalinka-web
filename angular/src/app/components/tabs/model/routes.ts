import {Route, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

export const DEFINED_ROUTES: R[] = [
  {
    path: "",
    loadChildren: "app/modules/home/home.module#HomeModule",
    pathMatch: "full",
    display: "Home"
  },
  {
    path: "services",
    loadChildren: "app/modules/services/services.module#ServicesModule",
    display: "Services"
  },
  {
    path: "gallery",
    loadChildren: "app/modules/gallery/gallery.module#GalleryModule",
    display: "Gallery"
  },
  {
    path: "contact",
    loadChildren: "app/modules/contact/contact.module#ContactModule",
    display: "Contact"
  }
];

export interface R extends Route {
  display?: string;
}

export const ROUTES_MODULE: ModuleWithProviders = RouterModule.forRoot(DEFINED_ROUTES);
