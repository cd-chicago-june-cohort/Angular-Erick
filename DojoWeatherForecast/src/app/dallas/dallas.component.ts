import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  dallas = []

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.retrieveWeather('dallas').then(weather => this.dallas = weather).catch(err => console.log(err))
  }

}
