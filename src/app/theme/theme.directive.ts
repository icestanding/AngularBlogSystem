import { Directive, AfterContentInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[theme]'
})
export class ThemeDirective implements AfterContentInit {
  @Input('theme')
  public theme: string;

  constructor(
    private el: ElementRef
  ) {
    console.log('1');
   }

  ngAfterContentInit () {
    if (this.theme === 'primary') {
      this.el.nativeElement.style.backgroundColor = 'white';
      this.el.nativeElement.style.color = 'black';
    }
  }
}
