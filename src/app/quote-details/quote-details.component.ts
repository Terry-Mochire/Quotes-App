import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { retry } from 'rxjs';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() newSingleQuote! : Quote
  
  @Output() deleteQuote = new EventEmitter<boolean>();
  delete(complete: boolean){
    this.deleteQuote.emit(complete);
  }

  addLike(like: number){
    this.newSingleQuote.upvote += 1
    return like
  }

  
    
  addDislike(dislike: number){
    this.newSingleQuote.downvote += 1
    return dislike
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
