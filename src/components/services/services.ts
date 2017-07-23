import {ArtClasses} from "./customers/art_classes";
import {Bioceramics} from "./customers/bioceramics";
import {ComputerClass} from "./customers/computer_class";
import {DramaClub} from "./customers/drama_club";
import {EslClass} from "./customers/esl_class";
import {ExtendedWorkingHours} from "./customers/extended_working_hours";
import {FieldTrips} from "./customers/field_trips";
import {Haircuts} from "./customers/haircuts";
import {Karaoke} from "./customers/karaoke";
import {MassageTherapist} from "./customers/massage_therapist";
import {SkinCareClass} from "./customers/skin_care_classes";
import {SocialDances} from "./customers/social_dances";
import {WellnessClasses} from "./customers/wellness_classes";
import {Service} from "./service";
import {I18N} from "aurelia-i18n";
import {inject, bindable, customElement} from 'aurelia-framework';
import {LanguagePicker} from "../lang/lang_picker";
/**
 * Created by sanitizer on 7/14/17.
 */
@inject(I18N)
export class Services {

    @bindable mainHeader: string;
    @bindable mainText: Array<string>;
    @bindable dividerText: string;
    @bindable services: Array<Service>;
    i18n: I18N;

    constructor(i18n) {
        this.i18n = i18n;
        this.mainHeader = this.i18n.tr(this.getMainHeaderKey());
        this.mainText = this.i18n.tr(this.getMainTextKey()).split("\n");
        this.dividerText = this.i18n.tr(this.getDividerTextKey());
        this.services = [new ArtClasses(i18n),
                         new Bioceramics(i18n),
                         new ComputerClass(i18n),
                         new DramaClub(i18n),
                         new EslClass(i18n),
                         new ExtendedWorkingHours(i18n),
                         new FieldTrips(i18n),
                         new Haircuts(i18n),
                         new Karaoke(i18n),
                         new MassageTherapist(i18n),
                         new SkinCareClass(i18n),
                         new SocialDances(i18n),
                         new WellnessClasses(i18n)];
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

}