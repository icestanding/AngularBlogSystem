import { Component,ViewChild, ElementRef, Inject, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart,NavigationCancel, Event as NavigationEvent } from '@angular/router';
import { MdSidenav } from '@angular/material'
import { DOCUMENT } from '@angular/platform-browser'
import { LoginServiceService } from '../service/login/login-service.service'
import { routerTransition } from './router.animation'

import {trigger, state, animate, style, transition,query,group} from '@angular/animations';


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
   animations: [    trigger('routerTransition', [
    state('main', style({}) ),
    state('blog', style({}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ]),
    transition('main=>blog', [
      group([
         query('.content', [style({top: 0,position:'absolute'}),animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))]),
    
         query('.cnm', [style({transform: 'translateX(100%)'}),animate('0.5s ease-in-out', style({transform: 'translateX(0)'}))])
     
       ] )
        //  query(':enter',[animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))])    
    ]),
    transition('blog=>main', [
      group([
         query('.cnm', [style({top: 0,position:'absolute'}),animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))]),
    
         query('.content', [style({transform: 'translateX(100%)'}),animate('0.5s ease-in-out', style({transform: 'translateX(0)'}))])
     
       ] )
        //  query(':enter',[animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))])    
    ])
  ]) ],
})

export class FrontComponent implements OnInit {
  public mytheme: {
    'alternate-theme'?: boolean;
    'main-theme'?: boolean;
  };
  private router: Router;
  public hide: boolean;


  title = 'app';
  @ViewChild('start2') Sidenav:MdSidenav;
  @ViewChild('start2') elementView: ElementRef;
 




  constructor(@Inject(DOCUMENT) private document:Document, private _router:Router, private login: LoginServiceService) {
    // if inner size 840px

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
  ngOnInit() {

  }
  ngAfterViewInit() {
    if(window.innerWidth <= 1000) {
      this.Sidenav.mode='over';
      this.Sidenav.opened=false;
    }
  }

  sidebar() {
    this.Sidenav.toggle();
  }
  themechange() {
    if(this.mytheme["alternate-theme"] == true) {
      this.mytheme={'alternate-theme':false, 'main-theme': true};
    }
    else {
       this.mytheme={'alternate-theme':true, 'main-theme': false};
    }
  }
   @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth <= 1000) {
      this.Sidenav.mode='over';
      this.Sidenav.opened=false;
    }
    else {
      this.Sidenav.mode='side';
      this.Sidenav.opened=true;
    }
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  
  
  

}
