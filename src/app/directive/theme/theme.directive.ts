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
    // if (this.theme === 'primary') {
    //   this.el.nativeElement.style.backgroundColor = '#0a5ad8';
    //   this.el.nativeElement.style.color = 'black';
    // }
    // if (this.theme === 'black') {
    //   this.el.nativeElement.style.backgroundColor = 'black';
    //   this.el.nativeElement.style.color = 'white';
    // }
    // if (this.theme === 'red') {
    //   this.el.nativeElement.style.backgroundColor = 'black';
    //   this.el.nativeElement.style.color = 'white';
    // }
  }
  changeColor(color:string) {
      // this.el.nativeElement.style.backgroundColor = 'red';
      // this.el.nativeElement.style.color = 'red';
  }
}
