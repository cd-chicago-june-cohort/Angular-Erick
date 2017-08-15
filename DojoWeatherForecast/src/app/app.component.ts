import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  location =''
  weather = []
  constructor(private _weatherService: WeatherService) {}
  getWeather() {
    this._weatherService.retrieveWeather(this.location).then(tasks => this.weather = tasks).catch(err => console.log(err));
  }
}
