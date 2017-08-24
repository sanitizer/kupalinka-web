import {Service} from "./service";
import {Bioceramics} from "./customers/bioceramics";
import {ComputerClass} from "./customers/computer_class";
import {TheatreStudio} from "./customers/theatre_studio";
import {EslClass} from "./customers/esl_class";
import {ExcursionTrips} from "./customers/excursion_trips";
import {Haircuts} from "./customers/haircuts";
import {Karaoke} from "./customers/karaoke";
import {MassageTherapist} from "./customers/massage_therapist";
import {SkinCareClass} from "./customers/skin_care_classes";
import {SocialDances} from "./customers/social_dances";
import {ClubOfCurious} from "./customers/club_of_curious";
import {WellnessClasses} from "./customers/wellness_classes";
import {I18N} from "aurelia-i18n";
import {inject, bindable} from 'aurelia-framework';
import {EventAggregator, Subscription} from "aurelia-event-aggregator";
import {LANG_CHANGED} from "../lang/model/constants";
import {Citizenship} from "./customers/citizenship";
import {Fashion} from "./customers/fashion";
import {Rental} from "./customers/rental";
import {Scenario} from "./customers/scenario";

/**
 * Created by sanitizer on 7/14/17.
 */
@inject(I18N, EventAggregator)
export class Services {

    @bindable mainHeader: string;
    @bindable mainText: Array<string>;
    @bindable dividerText: string;
    @bindable services: Array<Service>;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea) {
        this.i18n = i18n;
        this.ea = ea;
        this.setLocalizedStrings();
        this.services = [new Bioceramics(i18n, ea),
                         new ComputerClass(i18n, ea),
                         new TheatreStudio(i18n, ea),
                         new EslClass(i18n, ea),
                         new ExcursionTrips(i18n, ea),
                         new Haircuts(i18n, ea),
                         new Karaoke(i18n, ea),
                         new MassageTherapist(i18n, ea),
                         new Citizenship(i18n, ea),
                         new Fashion(i18n, ea),
                         new Rental(i18n, ea),
                         new Scenario(i18n, ea),
                         new SkinCareClass(i18n, ea),
                         new SocialDances(i18n, ea),
                         new ClubOfCurious(i18n, ea),
                         new WellnessClasses(i18n, ea)];
    }

    private getMainHeaderKey(): string {
        return "servicesHeader";
    }

    private getDividerTextKey(): string {
        return "dividerText";
    }

    private getMainTextKey(): string {
        return "servicesText";
    }

    setLocalizedStrings() {
        this.mainHeader = this.i18n.tr(this.getMainHeaderKey());
        this.mainText = this.i18n.tr(this.getMainTextKey()).split("\n");
        this.dividerText = this.i18n.tr(this.getDividerTextKey());
    }

    attached() {
        let curObj = this;
        this.subscriber = this.ea.subscribe(LANG_CHANGED, response => {
            curObj.i18n.setLocale(response.locale);
            curObj.setLocalizedStrings();
        });
    }

    detached() {
        if(this.subscriber){
            this.subscriber.dispose();
        }
    }

}