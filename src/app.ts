import RouteModel from "./resources/model/route-model";
import {bindable} from "aurelia-templating";

export class App {

  @bindable router;

  configureRouter(config, router) {
    config.title = "Kupalinka";

    let routes: RouteModel[] = [];
    routes.push(new RouteModel(["", "home"], "home", "home/home", "Home"));
    routes.push(new RouteModel(["services"], "services", "services/services", "Services"));
    routes.push(new RouteModel(["additional"], "additional", "services/additional", "Additional"));
    routes.push(new RouteModel(["staff"], "staff", "staff/staff", "Staff"));
    routes.push(new RouteModel(["gallery"], "gallery", "gallery/gallery", "Photo Gallery"));
    routes.push(new RouteModel(["contact"], "contact", "contact/contact", "Contact Us"));

    config.map(routes);

    this.router = router;
  }

}
