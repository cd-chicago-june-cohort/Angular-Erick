import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) {}

  retrieveWeather(location){
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&APPID=310a01adc437746e310273be3584d6dc'
    return this._http.get(url).map(data => data.json()).toPromise();
  }
}
