import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  chicago = []

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.retrieveWeather('chicago').then(weather => this.chicago = weather).catch(err => console.log(err))
  }

}
