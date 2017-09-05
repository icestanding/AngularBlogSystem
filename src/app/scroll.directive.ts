import { Directive, Input, ElementRef, HostListener, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'

//  This directive is used to add scroll class

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {

  constructor(private el: Element, private renderer:Renderer2) {
    
  }
  // @HostListener('window:scroll', [])
  // @Input('scroll') offset: number;
  // @Input() css1: string;
  // @Input() css2: string;
  
  // onWindowScroll() {
  //   let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   let windowheight = window.innerHeight;

  //   if(number > this.offset) {
  //      this.renderer.addClass(this.el, this.css1);
  //      this.renderer.removeClass(this.el, this.css2);
  //   }
  //   else  {
  //     this.renderer.addClass(this.el, this.css2);
  //     this.renderer.removeClass(this.el, this.css1);
  //   }
  // }
}
