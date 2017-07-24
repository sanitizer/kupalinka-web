import RouteModel from "./resources/model/route-model";
import {bindable, inject} from "aurelia-framework";
import {Picture} from "./resources/model/picture";
import {BASE_MISC_DIR} from "./constants";
import {I18N} from "aurelia-i18n";
import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {Router, RouterConfiguration, RouteConfig} from "aurelia-router";
import {LANG_CHANGED} from "./components/lang/model/constants";

@inject(I18N, EventAggregator)
export class App {

  @bindable router: Router;
  @bindable config: RouteConfig;
  @bindable header: string;
  @bindable subHeader: string;
  @bindable headerPic: Picture;
  i18n: I18N;
  ea: EventAggregator;
  subscriber: Subscription;

  constructor(i18n, ea) {
      this.i18n = i18n;
      this.ea = ea;
      this.subscribe();
      this.header = "Kupalinka";
      this.subHeader = "Adult Daycare";
      this.headerPic = new Picture(BASE_MISC_DIR + "sign.jpg");
  }

  configureRouter(config: RouteConfig, router: Router) {
    config.title = "Kupalinka";
    this.config = config;
    this.config.map(this.getRoutes());
    this.router = router;
  }

  attached() {
      this.subscribe();
  }

  getRoutes(): RouteModel[] {
      let routes: RouteModel[] = [];
      routes.push(new RouteModel(["", "home"], "home", "home/home", this.i18n.tr("nav:home")));
      routes.push(new RouteModel(["services"], "services", "services/services", this.i18n.tr("nav:services")));
      routes.push(new RouteModel(["staff"], "staff", "staff/staff", this.i18n.tr("nav:staff")));
      routes.push(new RouteModel(["gallery"], "gallery", "gallery/gallery", this.i18n.tr("nav:gallery")));
      routes.push(new RouteModel(["contact"], "contact", "contact/contact", this.i18n.tr("nav:contact")));
      return routes;
  }

  subscribe() {
      let curObj = this;
      this.subscriber = this.ea.subscribe(LANG_CHANGED, response => {
          curObj.i18n.setLocale(response.locale);
          this.configureRouter(this.config, this.router);
      });
  }

  detached() {
    if(this.subscriber){
        this.subscriber.dispose();
    }
  }

}
