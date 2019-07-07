import { Component, Output, EventEmitter, OnInit, HostListener, Inject } from '@angular/core';
import { SidebarService } from '../../../service/sidebar/sidebar.service';
import { Router } from '@angular/router'
import { Location } from '@angular/common'


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

    constructor( private sidebarservice:SidebarService, private router: Router, private location:Location) {
        this.nav = true;
        this.back = false;
         this.sidebarservice.messageO.subscribe((res)=>{
            this.nav = false;
            this.back = true;   
    })


    }
    ngOnInit() {
        let regx = /^\/blog\/.*/;
        console.log(this.router.url);
        if (this.router.url.match(regx)) {
      
            this.nav = false;
            this.back = true;
        // this.sidebar_hide=false;
      }
    }

    
  

    toggle(e) {
        if (this.nav == true) {
            this.event.emit(e);
        }
        else {
            this.nav = true;
            this.back = false;
            // this.location.back();
            this.router.navigateByUrl('');
            if(window.innerWidth > 1000) {
                this.event.emit(e);
            }
        }
      
    }
    change(e) {
        this.color.emit(e);
    }
    changenav() {
        this.nav = false;
        this.back = true;
    }
}
