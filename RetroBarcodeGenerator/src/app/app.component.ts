import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorArray = ['Red', 'DarkSeaGreen', 'LightSkyBlue', 'Orchid', 'Plum', 'PaleTurquoise', 'PaleVioletRed', 'RosyBrown', 'RoyalBlue', 'SteelBlue']
  random = [
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
    Math.floor(Math.random() * 9) + 1,
  ]
}
