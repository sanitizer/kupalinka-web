import {Picture} from "../../resources/model/picture";
import {BASE_GALLERY_DIR} from "./constants";
import {bindable, inject} from "aurelia-framework";
import {LANG_CHANGED} from "../lang/model/constants";
import {I18N} from "aurelia-i18n";
import {EventAggregator, Subscription} from "aurelia-event-aggregator";

/**
 * Created by sanitizer on 7/14/17.
 */
@inject(I18N, EventAggregator)
export class Gallery {

    @bindable pics: Array<Picture>;
    @bindable header: string;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea) {
        this.i18n = i18n;
        this.ea = ea;
        this.setLocalizedStrings();
        this.pics = [new Picture(i18n, ea, BASE_GALLERY_DIR + "1.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "2.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "3.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "4.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "5.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "6.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "7.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "8.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "9.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "10.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "11.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "12.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "13.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "14.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "15.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "16.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "17.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "18.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "19.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "20.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "21.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "22.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "23.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "24.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "25.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "26.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "27.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "28.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "29.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "30.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "31.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "32.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "33.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "34.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "35.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "36.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "37.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "38.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "39.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "40.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "41.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "42.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "43.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "44.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "45.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "46.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "47.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "48.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "49.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "50.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "51.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "52.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "53.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "54.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "55.jpg"),
                     // new Picture(i18n, ea, BASE_GALLERY_DIR + "56.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "57.jpg"),
                     new Picture(i18n, ea, BASE_GALLERY_DIR + "58.jpg")];
    }

    setLocalizedStrings() {
        this.header = this.i18n.tr(this.getHeaderKey());
    }

    getHeaderKey(): string {
        return "pics:galleryHeader";
    }

    attached() {
        this.subscribe();
    }

    subscribe() {
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