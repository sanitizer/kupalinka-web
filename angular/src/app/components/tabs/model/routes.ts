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
    path: "staff",
    loadChildren: "app/modules/staff/staff.module#StaffModule",
    display: "Staff"
  },
  {
    path: "gallery",
    loadChildren: "app/modules/gallery/gallery.module#GalleryModule",
    display: "Photo Gallery"
  },
  {
    path: "contact",
    loadChildren: "app/modules/contact/contact.module#ContactModule",
    display: "Contact Us"
  }
];

export interface R extends Route {
  display?: string;
}

export const ROUTES_MODULE: ModuleWithProviders = RouterModule.forRoot(DEFINED_ROUTES);
