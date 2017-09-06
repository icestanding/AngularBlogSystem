import { Component,ViewChild, ElementRef, Inject, HostListener } from '@angular/core';
import { MdSidenav } from '@angular/material'
import { DOCUMENT } from '@angular/platform-browser'
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mytheme: {
    'alternate-theme'?: boolean;
    'main-theme'?: boolean;
    'main'?: boolean;
    'mainfix'?: boolean;
  };
  private router: Router;



  title = 'app';
  @ViewChild('start2') MdSidenav:MdSidenav;
  @ViewChild('start2') elementView: ElementRef;

  constructor(@Inject(DOCUMENT) private document:Document, private _router:Router) {
    this.mytheme = {
                    'alternate-theme': true, 
                    'main-theme': false,
                  };
    this.router = _router;
    this.router.events.forEach((event: NavigationEvent) => {
    if(event instanceof NavigationStart) {
      console.log('fk u ');
      console.log(event.url);
    }
    // NavigationEnd
    // NavigationCancel
    // NavigationError
    // RoutesRecognized
  });



  }
  ngOnInit() {}


  sidebar() {
    this.MdSidenav.toggle();
  }
  themechange() {
    this.mytheme['alternate-theme'] = false;
    this.mytheme['main-theme'] = true;
  }
}
