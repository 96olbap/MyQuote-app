import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { IncUpvoteDirective } from './inc-upvote.directive';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { PeriodPipe } from './period.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuotesComponent,
    HighlightDirective,
    QuoteFormComponent,
    IncUpvoteDirective,
    QuoteDetailsComponent,
    PeriodPipe
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
