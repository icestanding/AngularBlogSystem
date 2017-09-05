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
    'height'?: string
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
                    'snavfix': false,
                    'height': "",
    }
  }
  ngOnInit() {}

      // when reach 200 change theme
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let maxheight = document.body.scrollHeight - 64;
    let windowheight = window.innerHeight;
    console.log(maxheight);
    console.log(number);

    if(number > 290 && number <= maxheight ) {
      this.mytheme['main'] = false;
      this.mytheme['mainfix'] = true;
      this.snav['snav'] = false;
      this.snav['snavfix'] = true;
      this.snav['height'] = "";
    }
    else if (number <= 290 ) {
      this.mytheme['main'] = true;
      this.mytheme['mainfix'] = false;
      this.snav['snav'] = true;
      this.snav['snavfix'] = false;
      this.snav['height'] = "";
    }
    else if (number >= maxheight) {
      console.log("fku");
      let offset = number - maxheight;
      this.snav['height'] = String(windowheight - 36 - offset );
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
