import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quotes: Quote[]=[

  ]

  @Output() singleQuoteEmitter = new EventEmitter<Quote>();

  onEmitSingleQuote(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    // this.singleQuoteEmitter.emit(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
