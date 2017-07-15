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
/**
 * Created by sanitizer on 7/14/17.
 */

export class Services {

    services: Array<Service>;

    constructor() {
        this.services = [new ArtClasses(),
                         new Bioceramics(),
                         new ComputerClass(),
                         new DramaClub(),
                         new EslClass(),
                         new ExtendedWorkingHours(),
                         new FieldTrips(),
                         new Haircuts(),
                         new Karaoke(),
                         new MassageTherapist(),
                         new SkinCareClass(),
                         new SocialDances(),
                         new WellnessClasses()];
    }

}