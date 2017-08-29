import { Component, OnInit } from '@angular/core';
import {DEFINED_ROUTES, R} from "../model/routes";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  routes: R[] = DEFINED_ROUTES;

  constructor() {}

  ngOnInit() {}

}
