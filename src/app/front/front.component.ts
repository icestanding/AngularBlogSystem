import { Component,ViewChild, ElementRef, Inject, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart,NavigationCancel, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { MatSidenav } from '@angular/material'
import { DOCUMENT } from '@angular/platform-browser'
import { LoginServiceService } from '../service/login/login-service.service'
import { routerTransition } from './router.animation'
import { SidebarService } from '../service/sidebar/sidebar.service';
import { HeaderComponent } from '../share/header/header.component'
import { ColorService } from '../service/color/color.service'

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
   animations: [    routerTransition() ],
})

export class FrontComponent implements OnInit {
  public mytheme: {
    'alternate-theme'?: boolean;
    'main-theme'?: boolean;
  };
  private router: Router;
  public hide: boolean;
  public current_url;
  
  title = 'app';
  @ViewChild('start2') Sidenav:MatSidenav;
  @ViewChild('start2') elementView: ElementRef;
   @ViewChild('head') header;
 




  constructor(@Inject(DOCUMENT) private document:Document, private _router:Router, private login: LoginServiceService,
  private sidebarservice:SidebarService,
  public colorservice: ColorService) {
    // if inner size 840px
    
    this.sidebarservice.messageO.subscribe((res)=>{
       this.Sidenav.opened=false;
    })

    this.mytheme = {
                    'alternate-theme': false, 
                    'main-theme': true,
                  };
    this.router = _router;
    this.hide = true;
    

          // this.Sidenav.mode='over';
      // this.Sidenav.opened=false;
    this.router.events.forEach((event: NavigationEvent) => {
    if(event instanceof NavigationStart) {
      // console.log("this is fking url"+ event.url);
      // all template
      this.hide = true;
      let regx = /^\/admin.*/;
      let regx_open = /^\/blog\/.*/;
      console.log("cnmb xingbuxing")

      if(event.url == "/login") {
        this.hide = false;
          if(login.islogin()){
          this.router.navigateByUrl('/admin')
        }
      }
      else if (event.url.match(regx)) {
        console.log("fuck match")
        this.Sidenav.opened=false;
        
      }
      if(event instanceof NavigationCancel) {
         if(event.url == "/admin"){
          this.router.navigateByUrl('/login')
        }
      }


    }
    if (event instanceof NavigationEnd) {
      if(window.innerWidth <= 1000) {
         this.Sidenav.opened=false;
      }
      this.current_url = event.url;
    }
     

  });

  }
  ngOnInit() {

  }
  ngAfterViewInit() {
    let regx = /^\/blog\/.*/;
    if (this.router.url.match(regx)) {
      console.log("fuck match")
      this.Sidenav.opened=false;
      
    }
    else {
      if(window.innerWidth <= 1350) {
        this.Sidenav.mode='over';
        this.Sidenav.opened=false;
      }
      else{
        this.Sidenav.opened=true;
      }
    }
  }

  sidebar() {
    console.log("cnm")
    this.Sidenav.toggle();
  }
  themechange() {
    
    if(this.mytheme["alternate-theme"] == true) {
      this.mytheme={'alternate-theme':false, 'main-theme': true};
      this.colorservice.updateData([true, false]);
    }
    else {
       this.mytheme={'alternate-theme':true, 'main-theme': false};
       this.colorservice.updateData([false, true]);
       
    }
  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      console.log("current url"+ this.current_url);
      let regx_open = /^\/blog\/.*/;
      if(window.innerWidth <= 1350) {
        this.Sidenav.mode='over';
        this.Sidenav.opened=false;
        
      }
      else {
        if(this.current_url.match(regx_open)) {
          this.Sidenav.mode='side';
          this.Sidenav.opened=false;
        }
      else {
        this.Sidenav.mode='side';
        this.Sidenav.opened=true;
      }

      }
    }
    getState(outlet) {
      return outlet.activatedRouteData.state;
    }

  

}