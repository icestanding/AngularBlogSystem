import { Directive, Input, ElementRef, HostListener, Renderer2, Injectable} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'

//  This directive is used to add scroll class

@Directive({
  selector: '[scroll]'
})

@Injectable() 
export class ScrollDirective {
 
  constructor(private el: ElementRef, private renderer: Renderer2) {
    
  }

  @Input() offset: string; 
  @Input() css1: string;
  @Input() css2: string;

  @HostListener('window:scroll', [])  
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let windowheight = window.innerHeight;
    console.log(this.offset);
    if(number > parseInt(this.offset)) {
       this.renderer.addClass(this.el.nativeElement, this.css1);
       if(this.el.nativeElement.classList.contains(this.css2)) {
          this.renderer.removeClass(this.el, this.css2);
       }
    }
    else  {
      this.renderer.addClass(this.el.nativeElement.nativeElement, this.css2);
      if(this.el.nativeElement.classList.contains(this.css1)){
        this.renderer.removeClass(this.el.nativeElement.nativeElement, this.css1);
      }
    }
  }
}
