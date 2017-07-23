import RouteModel from "./resources/model/route-model";
import {bindable, inject} from "aurelia-framework";
import {Picture} from "./resources/model/picture";
import {BASE_MISC_DIR} from "./constants";
import {I18N} from "aurelia-i18n";

@inject(I18N)
export class App {

  @bindable router;
  @bindable header: string;
  @bindable subHeader: string;
  @bindable headerPic: Picture;
  i18n: I18N;

  constructor(i18n) {
      this.i18n = i18n;
      this.header = "Kupalinka";
      this.subHeader = "Adult Daycare";
      this.headerPic = new Picture(BASE_MISC_DIR + "sign.jpg");
  }

  configureRouter(config, router) {
    config.title = "Kupalinka";

    let routes: RouteModel[] = [];
    routes.push(new RouteModel(["", "home"], "home", "home/home", this.i18n.tr("nav:home")));
    routes.push(new RouteModel(["services"], "services", "services/services", this.i18n.tr("nav:services")));
    routes.push(new RouteModel(["staff"], "staff", "staff/staff", this.i18n.tr("nav:staff")));
    routes.push(new RouteModel(["gallery"], "gallery", "gallery/gallery", this.i18n.tr("nav:gallery")));
    routes.push(new RouteModel(["contact"], "contact", "contact/contact", this.i18n.tr("nav:contact")));

    config.map(routes);

    this.router = router;
  }

}
