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
    snav?: string;
    snavfix?: string;
    offset?: number
  };
  public height: number;

  title = 'app';
  @ViewChild('start2') MdSidenav:MdSidenav;
  @ViewChild('start2') elementView: ElementRef;

  constructor(@Inject(DOCUMENT) private document:Document) {
    this.mytheme = {
                    'alternate-theme': true, 
                    'main-theme': false,
                  };
    this.snav = {
      snav: "snav",
      snavfix: "snavfix",
      offset : 290
    }
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
