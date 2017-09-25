import { Component,ViewChild, ElementRef, Inject, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart,NavigationCancel, Event as NavigationEvent } from '@angular/router';
import { MdSidenav } from '@angular/material'
import { DOCUMENT } from '@angular/platform-browser'
import { LoginServiceService } from '../service/login/login-service.service'


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  public mytheme: {
    'alternate-theme'?: boolean;
    'main-theme'?: boolean;
  };
  private router: Router;
  public hide: boolean;


  title = 'app';
  @ViewChild('start2') MdSidenav:MdSidenav;
  @ViewChild('start2') elementView: ElementRef;

  constructor(@Inject(DOCUMENT) private document:Document, private _router:Router, private login: LoginServiceService) {
    this.mytheme = {
                    'alternate-theme': false, 
                    'main-theme': true,
                  };
    this.router = _router;
    this.hide = true;
    this.router.events.forEach((event: NavigationEvent) => {
    if(event instanceof NavigationStart) {
      // console.log("this is fking url"+ event.url);
      // all template
      this.hide = true;
      let regx = /^\/admin.*/;

      if(event.url == "/login") {
        this.hide = false;
        if(login.islogin()){
        this.router.navigateByUrl('/admin')
      }
        
      }
      if(event instanceof NavigationCancel) {
         if(event.url == "/admin"){
          this.router.navigateByUrl('/login')
        }
      }
      else if (event.url.match(regx)) {
        this.hide = false;
      }
    }
  });



  }
  ngOnInit() {}


  sidebar() {
    this.MdSidenav.toggle();
  }
  themechange() {
    if(this.mytheme["alternate-theme"] == true) {
      this.mytheme={'alternate-theme':false, 'main-theme': true};
    }
    else {
       this.mytheme={'alternate-theme':true, 'main-theme': false};
    }
  }
}
