import {Component, Input, OnInit} from '@angular/core';
import {Picture} from "../../../../components/common/model/picture";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pic: Picture;
  @Input() header: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
    this.pic = new Picture("../../../images/misc/sign.jpg");
    this.header = "A card";
    this.text = "Testing the text as is. Testing the text as is.\nTesting the text as is.Testing the text as is.Testing the text as is.Testing the text as isTesting the text as is. Testing the text as is.\nTesting the text as is.Testing the text as is.Testing the text as is.Testing the text as isTesting the text as is. Testing the text as is.\nTesting the text as is.Testing the text as is.Testing the text as is.Testing the text as is."
  }

}
