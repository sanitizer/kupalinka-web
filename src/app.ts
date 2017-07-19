import {bindable} from "aurelia-templating";
import {PLATFORM} from 'aurelia-pal';
import RouteModel from "./resources/model/route-model";

export class App {

    @bindable router;

    configureRouter(config, router) {
        config.title = "Kupalinka";

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
            { route: ['', 'home'], name: 'home',      moduleId: PLATFORM.moduleName('./components/home/home'),      nav: true, title: 'Home' },
            { route: 'welcome', name: 'welcome', moduleId: PLATFORM.moduleName('./welcome'), nav: true, title: 'Welcome' },
            { route: 'services', name: 'services', moduleId: PLATFORM.moduleName('./components/services/services'), nav: true, title: 'Services' },
            { route: 'additional', name: 'additional', moduleId: PLATFORM.moduleName('./components/services/additional'), nav: true, title: 'Additional' },
            { route: 'staff', name: 'staff', moduleId: PLATFORM.moduleName('./components/staff/staff'), nav: true, title: 'Staff' },
            { route: 'gallery', name: 'gallery', moduleId: PLATFORM.moduleName('./components/gallery/gallery'), nav: true, title: 'Photo Gallery' },
            { route: 'contact', name: 'contact', moduleId: PLATFORM.moduleName('./components/contact/contact'), nav: true, title: 'Contact Us' },
        ]);

        this.router = router;
    }

}
