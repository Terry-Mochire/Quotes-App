import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onQuoteCreated = new EventEmitter<Quote>();

  onAddQuote(form: NgForm){
    let addedQuote  = new Quote(form.value.message, form.value.quoteAuthor, form.value.userName, 0, 0)

    console.log(addedQuote);
    
    
    this.onQuoteCreated.emit(addedQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
