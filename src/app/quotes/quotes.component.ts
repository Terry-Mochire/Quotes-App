import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quotes: Quote[]=[
    new Quote("Today is your opportunity to build the tomorrow you want ", "Ken Poirot", "Terry Mochire", 0, 0),
    new Quote("Find your way Back, come home.", "Beyonce", "Terry Mochire", 0, 0),
    new Quote("Be Afraid but do it Anyway!", "Terry Mochire", "Terry Mochire", 0,0)

  ]

  @Output() singleQuoteEmitter = new EventEmitter<Quote>();

  onEmitQuoteDescription(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete: any,index: number){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }


  first!: number;
  last!:number
  count!:number 

 highest(){
  this.first = 0
  this.last = 0

  for(this.count=0 ; this.count < this.quotes.length; this.count++) {
    this.last = this.quotes[this.count].upvote;
    if(this.last > this.first){
      this.first = this.last
    }
  }
  return  this.first
}

  constructor() { }

  ngOnInit(): void {
  }

}
