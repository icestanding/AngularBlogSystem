import { Directive, Input, ElementRef, HostListener, Renderer2, Injectable} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'

//  This directive is used to add scroll class
// bug to fix check if a class exists

@Directive({
  selector: '[scroll]'
})

@Injectable() 
export class ScrollDirective {
 
  @Input('scroll') offset: string; 
  @Input() css1: string;
  @Input() css2: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    //  this.renderer.addClass(this.el.nativeElement, this.css1);

  }



  @HostListener('window:scroll', [])  
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let windowheight = window.innerHeight;
    console.log(this.offset);
    if(number >= parseInt(this.offset)) {
       this.renderer.addClass(this.el.nativeElement, this.css2);
        this.renderer.removeClass(this.el.nativeElement, this.css1);
       
    }
    else  {
      this.renderer.addClass(this.el.nativeElement, this.css1);
      this.renderer.removeClass(this.el.nativeElement, this.css2);
   
    }
  }
}
