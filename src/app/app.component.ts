import { Component,ViewChild, ElementRef } from '@angular/core';
import { MdSidenav } from '@angular/material'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mytheme: {
    'alternate-theme'?: boolean;
    'main-theme'?: boolean;
  };
  title = 'app';
  @ViewChild('start2') MdSidenav:MdSidenav;

  constructor() {
    this.mytheme = {'alternate-theme':true, 'main-theme': false};
  }

  sidebar() {
    // this.mdSidenav.nativeElement.toggle();
    this.MdSidenav.toggle();
  }
  themechange() {
    this.mytheme['alternate-theme'] = false;
    this.mytheme['main-theme'] = true;
  }
}
