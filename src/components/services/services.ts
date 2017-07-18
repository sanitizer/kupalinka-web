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
/**
 * Created by sanitizer on 7/14/17.
 */

export class Services {

    mainHeader: string;
    mainText: string;
    dividerText: string;
    services: Array<Service>;

    constructor() {
        this.mainHeader = this.getMainHeader();
        this.mainText = this.getMainText();
        this.dividerText = this.getDividerText();
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

    getMainHeader(): string {
        return "We are here to make your stay pleasant and fun";
    }

    getDividerText(): string {
        return "Services for customers";
    }

    getMainText(): string {
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
    }

}