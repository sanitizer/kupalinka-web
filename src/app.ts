import {PLATFORM} from 'aurelia-pal';
import {bindable} from 'aurelia-templating';
import {I18N} from "aurelia-i18n"
import {inject} from "aurelia-framework"
import {Picture} from "./resources/model/picture";
import {BASE_MISC_DIR} from "./constants";
import {Language} from "./resources/model/language";

@inject(I18N)
export class App {

    @bindable router;
    @bindable header: string;
    @bindable subHeader: string;
    @bindable headerPic: Picture;
    @bindable dropDownText: string;
    @bindable languages: Array<Language>;

    i18n: I18N;

    constructor(i18n) {
        this.i18n = i18n;
        this.header = "Kupalinka";
        this.subHeader = "Adult Daycare";
        this.dropDownText = this.i18n.tr(this.getDropDownTextKey());
        this.headerPic = new Picture(BASE_MISC_DIR + "sign.jpg");
        this.languages = [new Language("en", "English"),
            new Language("ru", "Russian")];
    }

    configureRouter(config, router) {
        config.title = 'Kupalinka';

        // let routes: RouteModel[] = [];
        // routes.push(new RouteModel(["", "home"], "home", "home/home", "Home"));
        // routes.push(new RouteModel(["services"], "services", "services/services", "Services"));
        // routes.push(new RouteModel(["additional"], "additional", "services/additional", "Additional"));
        // routes.push(new RouteModel(["staff"], "staff", "staff/staff", "Staff"));
        // routes.push(new RouteModel(["gallery"], "gallery", "gallery/gallery", "Photo Gallery"));
        // routes.push(new RouteModel(["contact"], "contact", "contact/contact", "Contact Us"));
        //
        // config.map(routes);
        config.map([
            { route: ['', 'home'], name: 'home',       moduleId: PLATFORM.moduleName('./components/home/home'),           nav: true, title: this.i18n.tr('nav:Home') },
            { route: 'welcome',    name: 'welcome',    moduleId: PLATFORM.moduleName('./welcome'),                        nav: true, title: this.i18n.tr('nav:Welcome') },
            { route: 'services',   name: 'services',   moduleId: PLATFORM.moduleName('./components/services/services'),   nav: true, title: this.i18n.tr('nav:Services') },
            { route: 'staff',      name: 'staff',      moduleId: PLATFORM.moduleName('./components/staff/staff'),         nav: true, title: this.i18n.tr('nav:Staff') },
            { route: 'gallery',    name: 'gallery',    moduleId: PLATFORM.moduleName('./components/gallery/gallery'),     nav: true, title: this.i18n.tr('nav:Photo Gallery') },
            { route: 'contact',    name: 'contact',    moduleId: PLATFORM.moduleName('./components/contact/contact'),     nav: true, title: this.i18n.tr('nav:Contact Us') }
        ]);

        this.router = router;
    }

    private getDropDownTextKey():string {
        return "dropDownText";
    }

}
