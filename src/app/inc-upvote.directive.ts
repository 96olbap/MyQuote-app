import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIncUpvote]'
})
export class IncUpvoteDirective {

  constructor(private elem:ElementRef) {
    
   }

}
