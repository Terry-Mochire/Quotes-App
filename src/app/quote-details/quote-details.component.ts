import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
   
   

  addLike(likes: number){
    likes = this.newSingleQuote.upvote ++;
    return likes;
  }

  
  
    
  addDislike(dislikes: number){
    dislikes= this.newSingleQuote.downvote ++;
    return dislikes;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
