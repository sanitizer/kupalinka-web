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

define('constants',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BASE_MISC_DIR = "/pics/misc/";
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment", "aurelia-i18n", "i18next-xhr-backend"], function (require, exports, environment_1, aurelia_i18n_1, Backend) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-i18n', function (instance) {
            var aliases = ['t', 'i18n'];
            aurelia_i18n_1.TCustomAttribute.configureAliases(aliases);
            instance.i18next.use(Backend);
            return instance.setup({
                backend: {
                    loadPath: './locales/{{lng}}/{{ns}}.json',
                },
                attributes: aliases,
                lng: 'en',
                fallbackLng: 'ru',
                debug: false,
                ns: ["translation", "nav"],
                defaultNS: "translation"
            });
        });
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
            this.addresses = [new address_1.Address("Main Office", "12597 E Mississippi Ave, Unit# 300, Aurora, Co, 80012", "9 am - 5 pm, Monday-Friday", "303-386-4508", "xxx-xxx-xxxx", "kupalinkaadc@gmail.com")];
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

define('components/gallery/constants',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BASE_GALLERY_DIR = "/pics/gallery/";
});

define('components/gallery/gallery',["require", "exports", "../../resources/model/picture", "./constants"], function (require, exports, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Gallery = (function () {
        function Gallery() {
            this.pics = [new picture_1.Picture(constants_1.BASE_GALLERY_DIR + "pic.jpg", "Some Pic"),
                new picture_1.Picture(constants_1.BASE_GALLERY_DIR + "pic.jpg", "Some Pic, but another"),
                new picture_1.Picture(constants_1.BASE_GALLERY_DIR + "pic.jpg", "Even better pic"),
                new picture_1.Picture(constants_1.BASE_GALLERY_DIR + "pic.jpg", "Amazing pic"),
                new picture_1.Picture(constants_1.BASE_GALLERY_DIR + "pic.jpg", "Hahaha pic"),
                new picture_1.Picture(constants_1.BASE_GALLERY_DIR + "pic.jpg", "Pic pic pic"),
                new picture_1.Picture(constants_1.BASE_GALLERY_DIR + "pic.jpg", "A pic is a pic"),
                new picture_1.Picture("/pics/misc" + "/sign.jpg", "Well you know pic"),
                new picture_1.Picture(constants_1.BASE_GALLERY_DIR + "pic.jpg", "Another pic"),
                new picture_1.Picture(constants_1.BASE_GALLERY_DIR + "pic.jpg", "Another pic")];
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

define('components/services/service',["require", "exports", "../../resources/utils/common"], function (require, exports, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Service = (function () {
        function Service() {
            this.mainHeader = this.getMainHeader();
            this.mainText = this.getMainText();
            this.dividerText = this.getDividerText();
            this.data = common_1.loadDataFromFile(this.getDataPath());
            this.partialData = this.getPartOfData();
        }
        Service.prototype.getPartOfData = function () {
            return this.showFullData() ? this.getData() : this.getData().substring(0, this.getMaxDescrSize() / 2) + "...";
        };
        Service.prototype.getData = function () {
            return this.data;
        };
        Service.prototype.getMaxDescrSize = function () {
            return 100;
        };
        Service.prototype.showFullData = function () {
            return this.getData().length <= this.getMaxDescrSize();
        };
        Service.prototype.getMainHeader = function () {
            return "";
        };
        Service.prototype.getDividerText = function () {
            return "";
        };
        Service.prototype.getMainText = function () { return ""; };
        Service.prototype.getDataPath = function () {
            return "";
        };
        Service.prototype.onClick = function () {
            alert(this.getData());
        };
        return Service;
    }());
    exports.Service = Service;
});

define('components/services/services',["require", "exports", "./customers/art_classes", "./customers/bioceramics", "./customers/computer_class", "./customers/drama_club", "./customers/esl_class", "./customers/extended_working_hours", "./customers/field_trips", "./customers/haircuts", "./customers/karaoke", "./customers/massage_therapist", "./customers/skin_care_classes", "./customers/social_dances", "./customers/wellness_classes"], function (require, exports, art_classes_1, bioceramics_1, computer_class_1, drama_club_1, esl_class_1, extended_working_hours_1, field_trips_1, haircuts_1, karaoke_1, massage_therapist_1, skin_care_classes_1, social_dances_1, wellness_classes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Services = (function () {
        function Services() {
            this.mainHeader = this.getMainHeader();
            this.mainText = this.getMainText();
            this.dividerText = this.getDividerText();
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
        Services.prototype.getMainHeader = function () {
            return "We are here to make your stay pleasant and fun";
        };
        Services.prototype.getDividerText = function () {
            return "List Of Services";
        };
        Services.prototype.getMainText = function () {
            return "Helsfkd jsaf;l kdslfk jsd ;lfkjsd ;klf dslk fjdl;sj fnvlksdjfnvdsjf;ln kdskjfn vkjsdh nfv\n" +
                "                d fk vdsnalkfhndsalkjfhn vsdkljafh nvsdkfhn vlksjdfhn vdslkfm njklh lkdjsafh nlkdshfn vsnldkjfh\n" +
                "                sdf nksdhflk vjhsdfl vlkjsd dhflksdjdhf kldsjdhf nvksdjdfhn kldsjdhn flkjsdh fnlkdsjhf nvsd\n" +
                "                dfdslkfh sldnkjhf lskdjhf nldjkshf lkjsddhf lkjds nf lkjsflkjsdhfn vkljsdhf vklsdj fvs'd\n" +
                "                ds f sdl;kf nfndsl;kfh vnsldkjhf lsdkjfhdsakjghl ahdsjhljv mcnv,mzriutyewpiytdo[ifygaspd;j hv198367tyewdsofh nsd\n" +
                "                 lhds fhp283ty09du fhni2 ht9hdfnil hn289 fhsd9uvn 8o7h2 9fnwdasp9h v8yw er.\n" +
                "                Helsfkd jsaf;l kdslfk jsd ;lfkjsd ;klf dslk fjdl;sj fnvlksdjfnvdsjf;ln kdskjfn vkjsdh nfv\n" +
                "                d fk vdsnalkfhndsalkjfhn vsdkljafh nvsdkfhn vlksjdfhn vdslkfm njklh lkdjsafh nlkdshfn vsnldkjfh\n" +
                "                sdf nksdhflk vjhsdfl vlkjsd dhflksdjdhf kldsjdhf nvksdjdfhn kldsjdhn flkjsdh fnlkdsjhf nvsd\n" +
                "                dfdslkfh sldnkjhf lskdjhf nldjkshf lkjsddhf lkjds nf lkjsflkjsdhfn vkljsdhf vklsdj fvs'd\n" +
                "                ds f sdl;kf nfndsl;kfh vnsldkjhf lsdkjfhdsakjghl ahdsjhljv mcnv,mzriutyewpiytdo[ifygaspd;j hv198367tyewdsofh nsd\n" +
                "                 lhds fhp283ty09du fhni2 ht9hdfnil hn289 fhsd9uvn 8o7h2 9fnwdasp9h v8yw er.\n" +
                "                Helsfkd jsaf;l kdslfk jsd ;lfkjsd ;klf dslk fjdl;sj fnvlksdjfnvdsjf;ln kdskjfn vkjsdh nfv\n" +
                "                d fk vdsnalkfhndsalkjfhn vsdkljafh nvsdkfhn vlksjdfhn vdslkfm njklh lkdjsafh nlkdshfn vsnldkjfh\n" +
                "                sdf nksdhflk vjhsdfl vlkjsd dhflksdjdhf kldsjdhf nvksdjdfhn kldsjdhn flkjsdh fnlkdsjhf nvsd\n" +
                "                dfdslkfh sldnkjhf lskdjhf nldjkshf lkjsddhf lkjds nf lkjsflkjsdhfn vkljsdhf vklsdj fvs'd\n" +
                "                ds f sdl;kf nfndsl;kfh vnsldkjhf lsdkjfhdsakjghl ahdsjhljv mcnv,mzriutyewpiytdo[ifygaspd;j hv198367tyewdsofh nsd\n" +
                "                 lhds fhp283ty09du fhni2 ht9hdfnil hn289 fhsd9uvn 8o7h2 9fnwdasp9h v8yw er.\n" +
                "                Helsfkd jsaf;l kdslfk jsd ;lfkjsd ;klf dslk fjdl;sj fnvlksdjfnvdsjf;ln kdskjfn vkjsdh nfv\n" +
                "                d fk vdsnalkfhndsalkjfhn vsdkljafh nvsdkfhn vlksjdfhn vdslkfm njklh lkdjsafh nlkdshfn vsnldkjfh\n" +
                "                sdf nksdhflk vjhsdfl vlkjsd dhflksdjdhf kldsjdhf nvksdjdfhn kldsjdhn flkjsdh fnlkdsjhf nvsd\n" +
                "                dfdslkfh sldnkjhf lskdjhf nldjkshf lkjsddhf lkjds nf lkjsflkjsdhfn vkljsdhf vklsdj fvs'd\n" +
                "                ds f sdl;kf nfndsl;kfh vnsldkjhf lsdkjfhdsakjghl ahdsjhljv mcnv,mzriutyewpiytdo[ifygaspd;j hv198367tyewdsofh nsd\n" +
                "                 lhds fhp283ty09du fhni2 ht9hdfnil hn289 fhsd9uvn 8o7h2 9fnwdasp9h v8yw er.";
        };
        return Services;
    }());
    exports.Services = Services;
});

define('components/staff/employee',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Employee = (function () {
        function Employee() {
            this.data = this.getDescription();
        }
        Employee.prototype.getDescription = function () {
            return "";
        };
        return Employee;
    }());
    exports.Employee = Employee;
});

define('components/staff/staff',["require", "exports", "./employees/employee1", "./employees/employee2"], function (require, exports, employee1_1, employee2_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Staff = (function () {
        function Staff() {
            this.employees = [new employee1_1.AlenaVolchak(),
                new employee2_1.IrinaMonosova()];
        }
        return Staff;
    }());
    exports.Staff = Staff;
});

define('resources/model/address',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Address = (function () {
        function Address(name, street, officeHours, phoneNum, fax, email) {
            this.name = name;
            this.street = street;
            this.officeHours = officeHours;
            this.phoneNum = phoneNum;
            this.fax = fax;
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

define('resources/utils/common',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function loadDataFromFile(filePath) {
        var reader = new XMLHttpRequest();
        reader.open("GET", filePath, false);
        reader.send(false);
        return reader.responseText;
    }
    exports.loadDataFromFile = loadDataFromFile;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/art_classes',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArtClasses = (function (_super) {
        __extends(ArtClasses, _super);
        function ArtClasses() {
            var _this = _super.call(this) || this;
            _this.name = "Art Classes";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        ArtClasses.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "art_classes.txt";
        };
        return ArtClasses;
    }(service_1.Service));
    exports.ArtClasses = ArtClasses;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/bioceramics',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bioceramics = (function (_super) {
        __extends(Bioceramics, _super);
        function Bioceramics() {
            var _this = _super.call(this) || this;
            _this.name = "Bioceramics";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        Bioceramics.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "bioceramics.txt";
        };
        return Bioceramics;
    }(service_1.Service));
    exports.Bioceramics = Bioceramics;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/computer_class',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComputerClass = (function (_super) {
        __extends(ComputerClass, _super);
        function ComputerClass() {
            var _this = _super.call(this) || this;
            _this.name = "Computer Class";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        ComputerClass.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "computer_class.txt";
        };
        return ComputerClass;
    }(service_1.Service));
    exports.ComputerClass = ComputerClass;
});

define('components/services/customers/constants',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BASE_SERVICES_DIR = "/pics/services/";
    exports.BASE_DATA_DIR = "/data/services/";
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/drama_club',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DramaClub = (function (_super) {
        __extends(DramaClub, _super);
        function DramaClub() {
            var _this = _super.call(this) || this;
            _this.name = "Drama Club";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        DramaClub.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "drama_club.txt";
        };
        return DramaClub;
    }(service_1.Service));
    exports.DramaClub = DramaClub;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/esl_class',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EslClass = (function (_super) {
        __extends(EslClass, _super);
        function EslClass() {
            var _this = _super.call(this) || this;
            _this.name = "ESL Class";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        EslClass.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "esl_class.txt";
        };
        return EslClass;
    }(service_1.Service));
    exports.EslClass = EslClass;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/extended_working_hours',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExtendedWorkingHours = (function (_super) {
        __extends(ExtendedWorkingHours, _super);
        function ExtendedWorkingHours() {
            var _this = _super.call(this) || this;
            _this.name = "Extended Working Hours";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        ExtendedWorkingHours.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "extended_working_hours.txt";
        };
        return ExtendedWorkingHours;
    }(service_1.Service));
    exports.ExtendedWorkingHours = ExtendedWorkingHours;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/field_trips',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FieldTrips = (function (_super) {
        __extends(FieldTrips, _super);
        function FieldTrips() {
            var _this = _super.call(this) || this;
            _this.name = "Field Trips";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        FieldTrips.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "field_trips.txt";
        };
        return FieldTrips;
    }(service_1.Service));
    exports.FieldTrips = FieldTrips;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/haircuts',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Haircuts = (function (_super) {
        __extends(Haircuts, _super);
        function Haircuts() {
            var _this = _super.call(this) || this;
            _this.name = "Haircuts";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        Haircuts.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "haircuts.txt";
        };
        return Haircuts;
    }(service_1.Service));
    exports.Haircuts = Haircuts;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/karaoke',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Karaoke = (function (_super) {
        __extends(Karaoke, _super);
        function Karaoke() {
            var _this = _super.call(this) || this;
            _this.name = "Karaoke";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        Karaoke.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "karaoke.txt";
        };
        return Karaoke;
    }(service_1.Service));
    exports.Karaoke = Karaoke;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/massage_therapist',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MassageTherapist = (function (_super) {
        __extends(MassageTherapist, _super);
        function MassageTherapist() {
            var _this = _super.call(this) || this;
            _this.name = "Massage Therapist";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        MassageTherapist.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "massage_therapist.txt";
        };
        return MassageTherapist;
    }(service_1.Service));
    exports.MassageTherapist = MassageTherapist;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/skin_care_classes',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SkinCareClass = (function (_super) {
        __extends(SkinCareClass, _super);
        function SkinCareClass() {
            var _this = _super.call(this) || this;
            _this.name = "Skin Care Class";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        SkinCareClass.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "skin_care_classes.txt";
        };
        return SkinCareClass;
    }(service_1.Service));
    exports.SkinCareClass = SkinCareClass;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/social_dances',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SocialDances = (function (_super) {
        __extends(SocialDances, _super);
        function SocialDances() {
            var _this = _super.call(this) || this;
            _this.name = "Social Dances";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        SocialDances.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "social_dances.txt";
        };
        return SocialDances;
    }(service_1.Service));
    exports.SocialDances = SocialDances;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/services/customers/wellness_classes',["require", "exports", "../../../resources/model/picture", "../service", "./constants"], function (require, exports, picture_1, service_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WellnessClasses = (function (_super) {
        __extends(WellnessClasses, _super);
        function WellnessClasses() {
            var _this = _super.call(this) || this;
            _this.name = "Wellness Classes";
            _this.pic = new picture_1.Picture(constants_1.BASE_SERVICES_DIR + "pic.jpg");
            return _this;
        }
        WellnessClasses.prototype.getDataPath = function () {
            return constants_1.BASE_DATA_DIR + "wellness_classes.txt";
        };
        return WellnessClasses;
    }(service_1.Service));
    exports.WellnessClasses = WellnessClasses;
});

define('components/staff/employees/constants',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BASE_EMPLOYEES_DIR = "/pics/employees/";
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/staff/employees/employee1',["require", "exports", "../../../resources/model/picture", "../employee", "./constants"], function (require, exports, picture_1, employee_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlenaVolchak = (function (_super) {
        __extends(AlenaVolchak, _super);
        function AlenaVolchak() {
            var _this = _super.call(this) || this;
            _this.name = "Alena Volchak";
            _this.position = "Entertainment Director";
            _this.pic = new picture_1.Picture(constants_1.BASE_EMPLOYEES_DIR + "pic.jpg");
            return _this;
        }
        AlenaVolchak.prototype.getDescription = function () {
            return "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. ";
        };
        return AlenaVolchak;
    }(employee_1.Employee));
    exports.AlenaVolchak = AlenaVolchak;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('components/staff/employees/employee2',["require", "exports", "../employee", "../../../resources/model/picture", "./constants"], function (require, exports, employee_1, picture_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IrinaMonosova = (function (_super) {
        __extends(IrinaMonosova, _super);
        function IrinaMonosova() {
            var _this = _super.call(this) || this;
            _this.name = "Irina Monosova";
            _this.position = "Assistant to regional manager";
            _this.pic = new picture_1.Picture(constants_1.BASE_EMPLOYEES_DIR + "pic.jpg");
            return _this;
        }
        IrinaMonosova.prototype.getDescription = function () {
            return "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. es i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. es i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. es i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. " +
                "yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i " +
                "work here. yes i work here. yes i work here. yes i work here. yes i work here. yes i work here. yes " +
                "i work here. yes i work here. ";
        };
        return IrinaMonosova;
    }(employee_1.Employee));
    exports.IrinaMonosova = IrinaMonosova;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"semantic-ui/semantic.css\"></require><require from=\"resources/css/styles.css\"></require><div class=\"ui inverted segment\"><div class=\"ui secondary pointing inverted menu\"><h2 class=\"ui top attached blue header item\"><img class=\"ui image\" src=\"${headerPic.path}\"> &ensp;<span class=\"common-font\"> ${header} <small>&ensp;${subHeader}</small></span></h2><a href=\"${row.href}\" class=\"${row.isActive ? 'item active common-font' : 'item common-font'}\" repeat.for=\"row of router.navigation\">${row.title}</a></div></div><div class=\"page-host\"><router-view></router-view></div></template>"; });
define('text!resources/css/styles.css', ['module'], function(module) { module.exports = ".lr20 {\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n.lr30 {\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.lr50 {\n    margin-left: 50px;\n    margin-right: 50px;\n}\n\n.lr100 {\n    margin-left: 100px;\n    margin-right: 100px;\n}\n\n.margin10 {\n    margin: 10px;\n}\n\n.common-font {\n    font-family: \"SansSerif\";\n}\n\n.main-gradient {\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#9bcdff+0,6eb0f2+0,86c0fa+76 */\n    background: rgb(155,205,255); /* Old browsers */\n    background: -moz-linear-gradient(top, rgb(155,205,255) 0%, rgb(110,176,242) 0%, rgb(134,192,250) 76%); /* FF3.6-15 */\n    background: -webkit-linear-gradient(top, rgb(155,205,255) 0%,rgb(110,176,242) 0%,rgb(134,192,250) 76%); /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, rgb(155,205,255) 0%,rgb(110,176,242) 0%,rgb(134,192,250) 76%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9bcdff', endColorstr='#86c0fa',GradientType=0 ); /* IE6-9 */\n}\n\n.header-gradient {\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#86dbfa+17,6ecff2+99,9be4ff+100 */\n    background: rgb(134,219,250); /* Old browsers */\n    background: -moz-linear-gradient(left, rgb(134,219,250) 17%, rgb(110,207,242) 99%, rgb(155,228,255) 100%); /* FF3.6-15 */\n    background: -webkit-linear-gradient(left, rgb(134,219,250) 17%,rgb(110,207,242) 99%,rgb(155,228,255) 100%); /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to right, rgb(134,219,250) 17%,rgb(110,207,242) 99%,rgb(155,228,255) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#86dbfa', endColorstr='#9be4ff',GradientType=1 ); /* IE6-9 */\n}"; });
define('text!components/contact/contact.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"resources/css/styles.css\"></require><require from=\"semantic-ui/semantic.css\"></require><div class=\"lr50\"><h1 class=\"ui header\"><span class=\"common-font\">${mainHeader}</span><div class=\"sub header margin10\"><span class=\"common-font\">${text}</span></div></h1><div class=\"ui list\"><div class=\"item common-font\" repeat.for=\"addr of addresses\"><div class=\"header\"><bold>${addr.name}</bold></div><div class=\"ui divider\"></div>${addr.street}<br>Office Hours: ${addr.officeHours}<br>Phone: ${addr.phoneNum}<br>Fax: ${addr.fax}<br>Email: ${addr.email}<br></div></div></div></template>"; });
define('text!components/gallery/gallery.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"resources/css/styles.css\"></require><require from=\"semantic-ui/semantic.css\"></require><div class=\"lr50\"><div class=\"ui four column centered equal width grid\"><div class=\"left floated column\" repeat.for=\"pic of pics\"><div class=\"ui basic segment common-font\"><a class=\"medium image\" href=\"${pic.path}\" target=\"_blank\"><img class=\"ui bordered rounded medium image\" src=\"${pic.path}\"></a><div class=\"content\">${pic.description}</div></div></div></div></div></template>"; });
define('text!components/home/home.html', ['module'], function(module) { module.exports = "<template><h2>${data}</h2></template>"; });
define('text!components/services/services.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"resources/css/styles.css\"></require><require from=\"semantic-ui/semantic.css\"></require><div class=\"ui three column equal wide grid\"><div class=\"column\"></div><div class=\"six wide column\"><div class=\"ui basic segment common-font\"><div class=\"ui centered header\">${mainHeader}</div><span>${mainText}</span></div></div><div class=\"column\"></div></div><div class=\"ui horizontal divider common-font\">${dividerText}</div><div class=\"ui basic segment\"></div><div class=\"lr100\"><div class=\"ui five centered cards\"><div class=\"ui grey raised link card\" repeat.for=\"service of services\"><div class=\"image\"><img src=\"${service.pic.path}\"></div><div class=\"content common-font\"><a class=\"header\" disabled=\"true\">${service.name}</a><div class=\"description\">${service.partialData}</div></div><div class=\"extra content common-font\"><button class=\"${service.showFullData() ? 'ui hidden button' : 'ui blue right floated basic button'}\" click.delegate=\"service.onClick()\">Read More</button></div></div></div></div></template>"; });
define('text!components/staff/staff.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"resources/css/styles.css\"></require><require from=\"semantic-ui/semantic.css\"></require><div class=\"ui divided items\"><div class=\"item\" repeat.for=\"employee of employees\"><div class=\"ui medium image\"><img src=\"${employee.pic.path}\"></div><div class=\"content common-font\"><div class=\"header\">${employee.name}</div><div class=\"meta\"><span>${employee.position}</span></div><div class=\"description\"><p>${employee.data}</p></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map