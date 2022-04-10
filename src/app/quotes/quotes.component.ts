import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] =[
    new Quote(1, 'We write to taste life twice, in the moment and in retrospect.', 0, 0, 'Wepukhulu'),
    new Quote(2, 'If my doctor told me I had only six minutes to live, I would not brood. I would type a little faster.', 0, 0, 'Nat' ),
    new Quote(3, 'The most important things in life are mostly thr most hopeless..', 0, 0, 'Nasim'),
  ]
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // quote.completeDate = new Date(goal.completeDate)
    this.quotes.push(quote)
  }

  arr: number[] = this.quotes.map(
    function (quote){
      return quote.upvote
    }
  )
  highest = Math.max(...this.arr)

  showAuthor(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].message}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
