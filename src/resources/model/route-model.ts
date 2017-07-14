/**
 * Created by sanitizer on 4/10/17.
 */

export default class RouteModel {
    route: string[];
    name: string;
    moduleId: string;
    nav: boolean;
    title: string;

    constructor(route: string[], name: string, moduleId: string, title: string, nav: boolean = true) {
        const baseDir = "./components";
        this.route = route;
        this.name = name;
        this.moduleId = moduleId.startsWith("/") ? baseDir + moduleId : baseDir + "/" + moduleId;
        this.nav = nav;
        this.title = title;
    }

}
