import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quotes
  @Output() voteUP = new EventEmitter()
  @Output() voteDOWN = new EventEmitter()
  @Output() DELETE = new EventEmitter()

  constructor() { }

  voteUp(index){
    this.voteUP.emit(index)
  }

  voteDown(index){
    this.voteDOWN.emit(index)
  }

  deleteVote(index){
    this.DELETE.emit(index)
  }

  ngOnInit() {
    
  }

}
