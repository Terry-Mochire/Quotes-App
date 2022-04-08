import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms'; 
import { QuotesComponent } from '../quotes/quotes.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() isComplete = new EventEmitter<Quote>();

  onAddQuote(form: NgForm){
    let addedQuote  = new Quote(form.value.message, form.value.quoteAuthor, 0, 0)

    console.log(addedQuote);
    
    this.isComplete.emit(addedQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
