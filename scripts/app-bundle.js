var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "./resources/model/route-model", "aurelia-templating", "./resources/model/picture", "./constants"], function (require, exports, route_model_1, aurelia_templating_1, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.header = "Kupalinka";
            this.subHeader = "Adult Daycare";
            this.headerPic = new picture_1.Picture(constants_1.BASE_MISC_DIR + "sign.jpg");
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

define('components/contact/contact',["require", "exports", "../../resources/model/address"], function (require, exports, address_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Contact = (function () {
        function Contact() {
            this.mainHeader = this.getMainHeader();
            this.text = this.getText();
            this.addresses = [new address_1.Address("Main Office", "Mississippi st.", "9am-3pm Monday-Friday", "xxx-xxx-xxxx", "kupalinka@mail.com")];
        }
        Contact.prototype.getMainHeader = function () {
            return "We are here to help - Contact us";
        };
        Contact.prototype.getText = function () {
            return "Give us a call, send an email, or drop by to have a conversation. We are here to help out in whatever way we can.";
        };
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

define('components/services/additional',["require", "exports", "./customers/art_classes"], function (require, exports, art_classes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Additional = (function () {
        function Additional() {
            this.services = [new art_classes_1.ArtClasses()];
        }
        return Additional;
    }());
    exports.Additional = Additional;
});

define('components/services/services',["require", "exports", "./customers/art_classes", "./customers/bioceramics", "./customers/computer_class", "./customers/drama_club", "./customers/esl_class", "./customers/extended_working_hours", "./customers/field_trips", "./customers/haircuts", "./customers/karaoke", "./customers/massage_therapist", "./customers/skin_care_classes", "./customers/social_dances", "./customers/wellness_classes"], function (require, exports, art_classes_1, bioceramics_1, computer_class_1, drama_club_1, esl_class_1, extended_working_hours_1, field_trips_1, haircuts_1, karaoke_1, massage_therapist_1, skin_care_classes_1, social_dances_1, wellness_classes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Services = (function () {
        function Services() {
            this.services = [new art_classes_1.ArtClasses(),
                new bioceramics_1.Bioceramics(),
                new computer_class_1.ComputerClass(),
                new drama_club_1.DramaClub(),
                new esl_class_1.EslClass(),
                new extended_working_hours_1.ExtendedWorkingHours(),
                new field_trips_1.FieldTrips(),
                new haircuts_1.Haircuts(),
                new karaoke_1.Karaoke(),
                new massage_therapist_1.MassageTherapist(),
                new skin_care_classes_1.SkinCareClass(),
                new social_dances_1.SocialDances(),
                new wellness_classes_1.WellnessClasses()];
        }
        return Services;
    }());
    exports.Services = Services;
});

define('components/staff/staff',["require", "exports", "./employees/employee1", "./employees/employee2"], function (require, exports, employee1_1, employee2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Staff = (function () {
        function Staff() {
            this.employees = [new employee1_1.AlenaVolchak(),
                new employee2_1.IrinaLastName()];
        }
        return Staff;
    }());
    exports.Staff = Staff;
});

define('resources/model/address',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Address = (function () {
        function Address(name, street, officeHours, phoneNum, email) {
            this.name = name;
            this.street = street;
            this.officeHours = officeHours;
            this.phoneNum = phoneNum;
            this.email = email;
        }
        return Address;
    }());
    exports.Address = Address;
});

define('resources/model/data_format',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

define('resources/model/employee',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

define('resources/model/picture',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Picture = (function () {
        function Picture(path, description) {
            if (description === void 0) { description = ""; }
            this.path = path;
            this.description = description;
        }
        return Picture;
    }());
    exports.Picture = Picture;
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

define('resources/model/service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

define('components/services/customers/art_classes',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArtClasses = (function () {
        function ArtClasses() {
            this.name = "Art Classes";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        ArtClasses.prototype.getDescription = function () {
            return "We do art. Impressed?";
        };
        return ArtClasses;
    }());
    exports.ArtClasses = ArtClasses;
});

define('components/services/customers/bioceramics',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bioceramics = (function () {
        function Bioceramics() {
            this.name = "Bioceramics";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        Bioceramics.prototype.getDescription = function () {
            return "We do whatever bioceramics is. Cool isnt it?";
        };
        return Bioceramics;
    }());
    exports.Bioceramics = Bioceramics;
});

define('components/services/customers/computer_class',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComputerClass = (function () {
        function ComputerClass() {
            this.name = "Computer Class";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        ComputerClass.prototype.getDescription = function () {
            return "This is the computer class. We study computers.";
        };
        return ComputerClass;
    }());
    exports.ComputerClass = ComputerClass;
});

define('components/services/customers/constants',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BASE_SERVICES_DIR = "/pics/services/";
});

define('components/services/customers/drama_club',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DramaClub = (function () {
        function DramaClub() {
            this.name = "Drama Club";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        DramaClub.prototype.getDescription = function () {
            return "Oh yes!!! We have a lot of drama here.";
        };
        return DramaClub;
    }());
    exports.DramaClub = DramaClub;
});

define('components/services/customers/esl_class',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EslClass = (function () {
        function EslClass() {
            this.name = "ESL Class";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        EslClass.prototype.getDescription = function () {
            return "This is the ESL class. We study English as a second language.";
        };
        return EslClass;
    }());
    exports.EslClass = EslClass;
});

define('components/services/customers/extended_working_hours',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExtendedWorkingHours = (function () {
        function ExtendedWorkingHours() {
            this.name = "Extended Working Hours";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        ExtendedWorkingHours.prototype.getDescription = function () {
            return "We work long and hard for you.";
        };
        return ExtendedWorkingHours;
    }());
    exports.ExtendedWorkingHours = ExtendedWorkingHours;
});

define('components/services/customers/field_trips',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FieldTrips = (function () {
        function FieldTrips() {
            this.name = "Field Trips";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        FieldTrips.prototype.getDescription = function () {
            return "We go to museums, concerts, movies.";
        };
        return FieldTrips;
    }());
    exports.FieldTrips = FieldTrips;
});

define('components/services/customers/haircuts',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Haircuts = (function () {
        function Haircuts() {
            this.name = "Haircuts";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        Haircuts.prototype.getDescription = function () {
            return "We do cut your hair from time to time.";
        };
        return Haircuts;
    }());
    exports.Haircuts = Haircuts;
});

define('components/services/customers/karaoke',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Karaoke = (function () {
        function Karaoke() {
            this.name = "Karaoke";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        Karaoke.prototype.getDescription = function () {
            return "We also sing. Like proooooossss!!!";
        };
        return Karaoke;
    }());
    exports.Karaoke = Karaoke;
});

define('components/services/customers/massage_therapist',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MassageTherapist = (function () {
        function MassageTherapist() {
            this.name = "Massage Therapist";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        MassageTherapist.prototype.getDescription = function () {
            return "We have a massage therapist stopping by from time to time.";
        };
        return MassageTherapist;
    }());
    exports.MassageTherapist = MassageTherapist;
});

define('components/services/customers/skin_care_classes',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SkinCareClass = (function () {
        function SkinCareClass() {
            this.name = "Skin Care Class";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        SkinCareClass.prototype.getDescription = function () {
            return "We teach you how to care of your skin.";
        };
        return SkinCareClass;
    }());
    exports.SkinCareClass = SkinCareClass;
});

define('components/services/customers/social_dances',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SocialDances = (function () {
        function SocialDances() {
            this.name = "Social Dances";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        SocialDances.prototype.getDescription = function () {
            return "We dance socially.";
        };
        return SocialDances;
    }());
    exports.SocialDances = SocialDances;
});

define('components/services/customers/wellness_classes',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WellnessClasses = (function () {
        function WellnessClasses() {
            this.name = "Wellness Classes";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
        }
        WellnessClasses.prototype.getDescription = function () {
            return "we do that kind of wellness and this kind of wellness. Ex: swimming pool, excercises, good nutrition, vitamins";
        };
        return WellnessClasses;
    }());
    exports.WellnessClasses = WellnessClasses;
});

define('components/staff/employees/employee1',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlenaVolchak = (function () {
        function AlenaVolchak() {
            this.name = "Alena Volchak";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_EMPLOYEES_DIR + "pic.jpg");
        }
        AlenaVolchak.prototype.getDescription = function () {
            return "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. ";
        };
        return AlenaVolchak;
    }());
    exports.AlenaVolchak = AlenaVolchak;
});

define('components/staff/employees/employee2',["require", "exports", "../../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IrinaLastName = (function () {
        function IrinaLastName() {
            this.name = "Irina LastName";
            this.description = this.getDescription();
            this.pic = new picture_1.Picture(constants_1.BASE_EMPLOYEES_DIR + "pic.jpg");
        }
        IrinaLastName.prototype.getDescription = function () {
            return "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. ";
        };
        return IrinaLastName;
    }());
    exports.IrinaLastName = IrinaLastName;
});

define('components/staff/employees/constants',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BASE_EMPLOYEES_DIR = "/pics/employees/";
});

define('constants',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BASE_MISC_DIR = "/pics/misc/";
});

define('components/services/non_customers/constants',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BASE_ADDITIONAL_SERVICES_DIR = "/pics/additional_services/";
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"semantic-ui/semantic.css\"></require><require from=\"resources/css/styles.css\"></require><div class=\"ui inverted segment\"><div class=\"ui secondary pointing inverted menu\"><h2 class=\"ui top attached blue header common-font item\"><img class=\"ui image\" src=\"${headerPic.path}\"> &ensp;${header} <small>&ensp;${subHeader}</small></h2><a href=\"${row.href}\" class=\"${row.isActive ? 'item active' : 'item'}\" repeat.for=\"row of router.navigation\">${row.title}</a></div></div><div class=\"page-host\"><router-view></router-view></div></template>"; });
define('text!resources/css/styles.css', ['module'], function(module) { module.exports = ".lr20 {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n.lr30 {\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.lr50 {\n    margin-left: 50px;\n    margin-right: 50px;\n}\n\n.margin10 {\n    margin: 10px;\n}\n\n.common-font {\n    font-family: \"SansSerif\";\n}\n\n.main-gradient {\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#9bcdff+0,6eb0f2+0,86c0fa+76 */\n    background: rgb(155,205,255); /* Old browsers */\n    background: -moz-linear-gradient(top, rgb(155,205,255) 0%, rgb(110,176,242) 0%, rgb(134,192,250) 76%); /* FF3.6-15 */\n    background: -webkit-linear-gradient(top, rgb(155,205,255) 0%,rgb(110,176,242) 0%,rgb(134,192,250) 76%); /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, rgb(155,205,255) 0%,rgb(110,176,242) 0%,rgb(134,192,250) 76%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9bcdff', endColorstr='#86c0fa',GradientType=0 ); /* IE6-9 */\n}\n\n.header-gradient {\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#86dbfa+17,6ecff2+99,9be4ff+100 */\n    background: rgb(134,219,250); /* Old browsers */\n    background: -moz-linear-gradient(left, rgb(134,219,250) 17%, rgb(110,207,242) 99%, rgb(155,228,255) 100%); /* FF3.6-15 */\n    background: -webkit-linear-gradient(left, rgb(134,219,250) 17%,rgb(110,207,242) 99%,rgb(155,228,255) 100%); /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to right, rgb(134,219,250) 17%,rgb(110,207,242) 99%,rgb(155,228,255) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#86dbfa', endColorstr='#9be4ff',GradientType=1 ); /* IE6-9 */\n}"; });
define('text!components/contact/contact.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"resources/css/styles.css\"></require><require from=\"semantic-ui/semantic.css\"></require><div class=\"lr50\"><h1 class=\"ui header\">${mainHeader}<div class=\"sub header margin10\">${text}</div></h1><div class=\"ui list\"><div class=\"item\" repeat.for=\"addr of addresses\"><div class=\"header\"><bold>${addr.name}</bold></div>${addr.street}<br>Office Hours: ${addr.officeHours}<br>Phone: ${addr.phoneNum}<br>Email: ${addr.email}<br></div></div></div></template>"; });
define('text!components/gallery/gallery.html', ['module'], function(module) { module.exports = "<template><h2>${data}</h2></template>"; });
define('text!components/home/home.html', ['module'], function(module) { module.exports = "<template><h2>${data}</h2></template>"; });
define('text!components/services/additional.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"resources/css/styles.css\"></require><require from=\"semantic-ui/semantic.css\"></require><div class=\"lr20 common-font\"><div class=\"ui five centered cards\"><div class=\"card\" repeat.for=\"service of services\"><div class=\"image\"><img src=\"${service.pic.path}\"></div><div class=\"content\"><a class=\"header\" disabled=\"true\">${service.name}</a><div class=\"description\">${service.description}</div></div></div></div></div></template>"; });
define('text!components/services/services.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"resources/css/styles.css\"></require><require from=\"semantic-ui/semantic.css\"></require><div class=\"lr50 common-font\"><div class=\"ui five centered cards\"><div class=\"ui grey raised link card\" repeat.for=\"service of services\"><div class=\"image\"><img src=\"${service.pic.path}\"></div><div class=\"content\"><a class=\"header\" disabled=\"true\">${service.name}</a><div class=\"description\">${service.description}</div></div></div></div></div></template>"; });
define('text!components/staff/staff.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"resources/css/styles.css\"></require><require from=\"semantic-ui/semantic.css\"></require><div class=\"lr50\"><div class=\"ui one column grid\"><div class=\"row\" repeat.for=\"employee of employees\"><div class=\"column ui segment\"><h2 class=\"ui header\">${employee.name}</h2><img class=\"ui medium left floated image\" src=\"${employee.pic.path}\"> <span class=\"common-font\">&emsp;${employee.description}</span></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map