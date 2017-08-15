import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  washington = []

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.retrieveWeather('washington').then(weather => this.washington = weather).catch(err => console.log(err))
  }

}
