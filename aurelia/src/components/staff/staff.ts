import {Employee} from "./employee";
import {AlenaVolchak} from "./employees/employee1";
import {IrinaMonosova} from "./employees/employee2";
import {I18N} from "aurelia-i18n";
import {inject, bindable} from 'aurelia-framework';
import {EventAggregator, Subscription} from "aurelia-event-aggregator";

/**
 * Created by sanitizer on 7/14/17.
 */
@inject(I18N, EventAggregator)
export class Staff {

    @bindable employees: Array<Employee>;
    i18n: I18N;
    ea: EventAggregator;
    subscriber: Subscription;

    constructor(i18n, ea) {
        this.i18n = i18n;
        this.ea = ea;
        this.employees = [new AlenaVolchak(i18n, ea),
                          new IrinaMonosova(i18n, ea)];
    }

}