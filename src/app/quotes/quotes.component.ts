import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] =[
    new Quote(1, 'We write to taste life twice, in the moment and in retrospect.', 0, 0),
    new Quote(2, 'If my doctor told me I had only six minutes to live, I would not brood. I would type a little faster.', 0, 0 ),
    new Quote(3, 'The most important things in life are mostly thr most hopeless..', 0, 0),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
