import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-text',
  templateUrl: './home-text.component.html',
  styleUrls: ['./home-text.component.css']
})
export class HomeTextComponent implements OnInit {

  hText: string;
  text: string;

  constructor() { }

  ngOnInit() {
    this.hText = "Welcome to Adult Day Care Center \"Kupalinka\"!";
    this.text = `The idea of opening adult day care center came from understanding of person's inner world, the willingness to bring more kindness, support and socialization for elders in Colorado. In April of 2017 Adult Day Care Center "Kupalinka" opened doors for everyone.
    \n\nKupalinka is a fairy tale girl and according to the old legend, she was looking for the flower of green fern, which became a symbol of kindness, symbol of hope, symbol of looking and finding something light, something better. That's why green fern with kind hands is the symbol of our day care center Kupalinka.
    \n\nThe main goal and mission of owners of the center is to create second home or home away from home, center where everything is filled with kindness and support. Separate rooms serve their own purpose:\n
      - library\n
      - relaxing room\n
      - art studio\n
      - dinning hall\n
      - music hall\n\n
    Adult Day Care Center "Kupalinka" conveniently located around shopping centers, many parks, recreational center (with swimming pool). We create a menu for all participants on weekly basis. Menu is created on personal dietary needs as well as needs for elderly people. We have wellness classes which include:\n
      - morning exercise\n
      - attending swimming pool\n
      - treadmill for walking\n\n
    Groups for people who would like to learn new things:\n
      - tours around beautiful Colorado with professional tour guide.\n
      - drama club shows\n
      - reading nights\n
      - photo and Video studio learning about it as well as making own videos.\n\n
    Building a cozy, kind and warm home away from home is the main mission and goal. Our Center's motto is to "No empty promises, we will prove with actions.`;
  }

}
