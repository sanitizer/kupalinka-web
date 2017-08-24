import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../user.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  text: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.text = "This is gallery";
  }

}
