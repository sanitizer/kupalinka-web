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
        this.pics = [new Picture(BASE_GALLERY_DIR + "pic.jpg", "Some Pic"),
                     new Picture(BASE_GALLERY_DIR + "pic.jpg", "Some Pic, but another"),
                     new Picture(BASE_GALLERY_DIR + "pic.jpg", "Even better pic"),
                     new Picture(BASE_GALLERY_DIR + "pic.jpg", "Amazing pic"),
                     new Picture(BASE_GALLERY_DIR + "pic.jpg", "Hahaha pic"),
                     new Picture(BASE_GALLERY_DIR + "pic.jpg", "Pic pic pic"),
                     new Picture(BASE_GALLERY_DIR + "pic.jpg", "A pic is a pic"),
                     new Picture("/pics/misc" + "/sign.jpg", "Well you know pic"),
                     new Picture(BASE_GALLERY_DIR + "pic.jpg", "Another pic"),
                     new Picture(BASE_GALLERY_DIR + "pic.jpg", "Another pic")];
    }

    setLocalizedStrings() {
        this.header = this.i18n.tr(this.getHeaderKey());
    }

    getHeaderKey(): string {
        return "galleryHeader";
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