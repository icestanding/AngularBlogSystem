import { Component, Output, EventEmitter, OnInit, HostListener,Inject } from '@angular/core';
import { DOCUMENT }from '@angular/platform-browser'

@Component({
    selector: 'navigation',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    @Output () event = new EventEmitter();
    public transform:{
      'nav'?: boolean;
      'navfixed'?: boolean;
    };
    constructor(@Inject(DOCUMENT) private document:Document) {
      this.transform = {'nav':true, 'navfixed': false};
    }
    ngOnInit() {}
    
    // when reach 200 change theme
    // @HostListener('window:scroll', [])
    // onWindowScroll() {
    //   let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //   if(number > 200) {
    //     this.transform['nav'] = false;
    //     this.transform['navfixed'] = true;
    //   }
    //   else if (number <= 200) {
    //     this.transform['nav'] = true;
    //     this.transform['navfixed'] = false;
    //   }
    // }


    toggle(e) {
      this.event.emit(e);
      
    }
}
