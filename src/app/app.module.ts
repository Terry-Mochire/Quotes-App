import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormComponent } from './form/form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { TimeCountPipe } from './time-count.pipe';



@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    FormComponent,
    QuoteDetailsComponent,
    HighlightDirective,
    TimeCountPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
