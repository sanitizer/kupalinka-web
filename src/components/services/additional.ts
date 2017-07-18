/**
 * Created by sanitizer on 7/14/17.
 */

import {ArtClasses} from "./customers/art_classes";
import {Service} from "./service";

export class Additional {

    mainHeader: string;
    mainText: string;
    dividerText: string;
    services: Array<Service>;

    constructor() {
        this.mainHeader = this.getMainHeader();
        this.mainText = this.getMainText();
        this.dividerText = this.getDividerText();
        this.services = [new ArtClasses()];
    }

    getMainHeader(): string {
        return "We provide services even though your are not our customer";
    }

    getDividerText(): string {
        return "Services for non customers";
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
