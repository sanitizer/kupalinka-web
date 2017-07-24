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
      routes.push(new RouteModel(["", "home"], "home", "home/home", this.i18n.tr(this.getKeyByHref("#/"))));
      routes.push(new RouteModel(["services"], "services", "services/services", this.i18n.tr(this.getKeyByHref("#/services"))));
      routes.push(new RouteModel(["staff"], "staff", "staff/staff", this.i18n.tr(this.getKeyByHref("#/staff"))));
      routes.push(new RouteModel(["gallery"], "gallery", "gallery/gallery", this.i18n.tr(this.getKeyByHref("#/gallery"))));
      routes.push(new RouteModel(["contact"], "contact", "contact/contact", this.i18n.tr(this.getKeyByHref("#/contact"))));
      return routes;
  }

  subscribe() {
      let curObj = this;
      this.subscriber = this.ea.subscribe(LANG_CHANGED, response => {
          curObj.i18n.setLocale(response.locale);
          curObj.localizeRouter();
      });
  }

  localizeRouter() {
      let curObj = this;
      this.router.navigation.forEach(nav => {
          nav.setTitle(this.i18n.tr(curObj.getKeyByHref(nav.href)));
      });
  }

  getHomeTitleKey(): string {
      return "nav:home";
  }

  getServicesTitleKey(): string {
      return "nav:services";
  }

  getStaffTitleKey(): string {
      return "nav:staff";
  }

  getGalleryTitleKey(): string {
      return "nav:gallery";
  }

  getContactTitleKey(): string {
      return "nav:contact";
  }

  getKeyByHref(href: string) {
      switch(href) {
          case "#/services":
              return this.getServicesTitleKey();
          case "#/staff":
              return this.getStaffTitleKey();
          case "#/gallery":
              return this.getGalleryTitleKey();
          case "#/contact":
              return this.getContactTitleKey();
          default:
              return this.getHomeTitleKey();
      }
  }

  detached() {
    if(this.subscriber){
        this.subscriber.dispose();
    }
  }

}
