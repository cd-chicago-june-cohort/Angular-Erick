import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RonSwansonService {

  constructor(private _http : Http) { }

  url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
  allUrl = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes/59'

  getWisdom(){
    return this._http.get(this.url).map(data => data.json()).toPromise()
  }
  searchWisdom(){
    return this._http.get(this.allUrl).map(data => data.json()).toPromise()
  }



}
