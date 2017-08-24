import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myhighlight]'
})
export class MydirDirective {

  constructor(el: ElementRef) {
      el.nativeElement.style.backgroundColor = 'yellow'; 
   }

}
