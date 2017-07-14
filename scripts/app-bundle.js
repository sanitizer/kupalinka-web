var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "./resources/model/route-model", "aurelia-templating"], function (require, exports, route_model_1, aurelia_templating_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = "Kupalinka";
            var routes = [];
            routes.push(new route_model_1.default(["", "home"], "home", "home/home", "Home"));
            routes.push(new route_model_1.default(["services"], "services", "services/services", "Services"));
            routes.push(new route_model_1.default(["additional"], "additional", "services/additional", "Additional"));
            routes.push(new route_model_1.default(["staff"], "staff", "staff/staff", "Staff"));
            routes.push(new route_model_1.default(["gallery"], "gallery", "gallery/gallery", "Photo Gallery"));
            routes.push(new route_model_1.default(["contact"], "contact", "contact/contact", "Contact Us"));
            config.map(routes);
            this.router = router;
        };
        return App;
    }());
    __decorate([
        aurelia_templating_1.bindable,
        __metadata("design:type", Object)
    ], App.prototype, "router", void 0);
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(fconfig) {
    }
    exports.configure = configure;
});

define('components/contact/contact',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Contact = (function () {
        function Contact() {
            this.data = "hello this is contact";
        }
        return Contact;
    }());
    exports.Contact = Contact;
});

define('components/gallery/gallery',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gallery = (function () {
        function Gallery() {
            this.data = "hello this is gallery";
        }
        return Gallery;
    }());
    exports.Gallery = Gallery;
});

define('components/home/home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
            this.data = "hello this is home";
        }
        return Home;
    }());
    exports.Home = Home;
});

define('components/services/additional',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Additional = (function () {
        function Additional() {
            this.data = "hello this is additional services";
        }
        return Additional;
    }());
    exports.Additional = Additional;
});

define('components/services/services',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Services = (function () {
        function Services() {
            this.data = "hello this is services";
        }
        return Services;
    }());
    exports.Services = Services;
});

define('components/staff/staff',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Staff = (function () {
        function Staff() {
            this.data = "hello this is staff";
        }
        return Staff;
    }());
    exports.Staff = Staff;
});

define('resources/model/route-model',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RouteModel = (function () {
        function RouteModel(route, name, moduleId, title, nav) {
            if (nav === void 0) { nav = true; }
            var baseDir = "./components";
            this.route = route;
            this.name = name;
            this.moduleId = moduleId.startsWith("/") ? baseDir + moduleId : baseDir + "/" + moduleId;
            this.nav = nav;
            this.title = title;
        }
        return RouteModel;
    }());
    exports.default = RouteModel;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"semantic-ui/semantic.css\"></require><h2 class=\"ui top attached blue header\" style=\"background-color:#e0ffff\">Kupalinka Adult Daycare</h2><div class=\"ui secondary pointing menu\"><a href=\"${row.href}\" class=\"${row.isActive ? 'active orange item' : 'item'}\" repeat.for=\"row of router.navigation\">${row.title}</a></div><div class=\"page-host\"><router-view></router-view></div></template>"; });
define('text!resources/styles/styles.css', ['module'], function(module) { module.exports = "Skip to content\nThis repository\nSearch\nPull requests\nIssues\nGist\n@sanitizer\nSign out\nWatch 2\nStar 1\nFork 2 Vheissu/tweeter\nCode  Issues 0  Pull requests 0  Projects 0  Wiki  Pulse  Graphs\nBranch: master Find file Copy pathtweeter/src/styles.css\n3dc3d5c  on Aug 26, 2016\n@Vheissu Vheissu feat(app): compose tweet functionality, remove router\n1 contributor\nRawBlameHistory\n98 lines (82 sloc)  1.22 KB\n* {\n  box-sizing: border-box;\n  position: relative;\n}\n\nbody {\n  background-color: #F5F8FA;\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  height: auto;\n  max-width: 100%;\n}\n\ntextarea {\n  border: none;\n  display: inline-block;\n  height: 70px;\n  padding: 12px;\n  resize: none;\n  width: 340px;\n}\n\nbutton {\n  background: #DDD;\n  border: none;\n  color: #000;\n  cursor: pointer;\n  display: inline-block;\n  height: 70px;\n  margin-left: 8px;\n  vertical-align: top;\n  width: 120px;\n}\n\nbutton:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.compose-container {\n  margin-bottom: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 620px;\n  width: 100%;\n}\n\ntweet-feed {\n  background: #FFF;\n  border: 1px solid #e1e8ed;\n  display: block;\n}\n\ntweet {\n  border-bottom: 1px solid #e1e8ed;\n  display: flex;\n  flex-direction: row;\n  padding: 20px 10px;\n}\ntweet:last-child {\n  border-bottom: none;\n}\n\n.tweet-avatar {\n  flex-basis: 48px;\n  height: 48px;\n  margin-right: 10px;\n}\n\n.tweet-avatar img {\n  border-radius: 5px;\n  display: block;\n}\n\n.tweet-body {\n  flex: 1;\n}\n\n.tweet-meta {\n  color: #DDD;\n  margin-bottom: 5px;\n}\n\n.tweet-meta strong {\n  color: #111;\n}\n\n.tweet-text {\n  font-size: 14px;\n  line-height: 18px;\n}\n"; });
define('text!components/contact/contact.html', ['module'], function(module) { module.exports = "<template><h2>${data}</h2></template>"; });
define('text!components/gallery/gallery.html', ['module'], function(module) { module.exports = "<template><h2>${data}</h2></template>"; });
define('text!components/home/home.html', ['module'], function(module) { module.exports = "<template><h2>${data}</h2></template>"; });
define('text!components/services/additional.html', ['module'], function(module) { module.exports = "<template><h2>${data}</h2></template>"; });
define('text!components/services/services.html', ['module'], function(module) { module.exports = "<template><h2>${data}</h2></template>"; });
define('text!components/staff/staff.html', ['module'], function(module) { module.exports = "<template><h2>${data}</h2></template>"; });
//# sourceMappingURL=app-bundle.js.map