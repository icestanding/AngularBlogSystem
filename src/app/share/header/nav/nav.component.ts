import { Component, Output, EventEmitter, OnInit, HostListener,Inject } from '@angular/core';
import { DOCUMENT }from '@angular/platform-browser'

@Component({
    selector: 'navigation',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    @Output () event = new EventEmitter();
    @Output () color = new EventEmitter();
    public nav:Boolean;
    public back:Boolean;

    constructor(@Inject(DOCUMENT) private document:Document) {
        this.nav = true;
        this.back = false;
    }
    ngOnInit() {}
    
    // when reach 200 change theme, can simplify to switch and case

    toggle(e) {
        this.event.emit(e);
      
    }
    change(e) {
        this.color.emit(e);
    }
    changenav() {
        this.nav = false;
        this.back = true;
    }
}
