import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

  sanJose = []

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.retrieveWeather('sanjose').then(weather => this.sanJose = weather).catch(err => console.log(err))
  }

}
