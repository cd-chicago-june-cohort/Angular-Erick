import { Component } from '@angular/core';
import { RonSwansonService } from './ron-swanson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomQuote = ''
  wisdom = ''
  allQuotes = []
  results = []

  constructor(private _swansonService : RonSwansonService){}

  getWisdom(){
    this._swansonService.getWisdom().then(quote => this.randomQuote = quote).catch(err => console.log(err))
  }

  searchWisdom(){
    this._swansonService.searchWisdom().then(quote => this.filterWisdom(quote)).catch(err => console.log(err))

  }
  filterWisdom(quote){
    this.results = []
    this.allQuotes = quote
    for(var k=0;k<this.allQuotes.length;k++){
      if(this.allQuotes[k].includes(this.wisdom)){
        this.results.push(this.allQuotes[k]);
      }
    }
  }
}
