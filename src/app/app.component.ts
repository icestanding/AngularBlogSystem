import { Component,ViewChild, ElementRef, Inject, HostListener } from '@angular/core';
import { MdSidenav } from '@angular/material'
import { DOCUMENT } from '@angular/platform-browser'


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
  public snav: {
    'snav'?: boolean;
    'snavfix'?: boolean;
  };

  title = 'app';
  @ViewChild('start2') MdSidenav:MdSidenav;

  constructor(@Inject(DOCUMENT) private document:Document) {
    this.mytheme = {
                    'alternate-theme': true, 
                    'main-theme': false,
                    'main': true,
                    'mainfix': false,
                  };
    this.snav = {
                    'snav':  true,
                    'snavfix': false
    }
  }
  ngOnInit() {}

      // when reach 200 change theme
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(number > 264  ) {
      this.mytheme['main'] = false;
      this.mytheme['mainfix'] = true;
      this.snav['snav'] = false;
      this.snav['snavfix'] = true;
    }
    else if (number <= 264 ) {
      this.mytheme['main'] = true;
      this.mytheme['mainfix'] = false;
      this.snav['snav'] = true;
      this.snav['snavfix'] = false;
    }
  }

  sidebar() {
    this.MdSidenav.toggle();
  }
  themechange() {
    this.mytheme['alternate-theme'] = false;
    this.mytheme['main-theme'] = true;
  }
}
