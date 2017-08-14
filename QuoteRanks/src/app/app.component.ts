import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  quoteObj = {
    quote: '',
    author: '',
    rating: 0
  }

  quotes = []

  addQuote(){
    this.quotes.push(this.quoteObj)
    this.quoteObj = {
      quote: '',
      author: '',
      rating: 0
    }
  }

  voteUp(event){
    this.quotes[event].rating += 1
  }

  voteDown(event){
    this.quotes[event].rating -= 1
  }

  deleteQuote(event){
    for(let k=event;k<this.quotes.length;k++){
      this.quotes[k] =  this.quotes[k + 1]
    }
    this.quotes.pop()
  }

}
