import { Component, OnInit } from '@angular/core';
import {DEFINED_ROUTES, R} from "./model/routes";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  routes: R[] = DEFINED_ROUTES;

  constructor() {}

  ngOnInit() {}

}
