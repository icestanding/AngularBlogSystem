import { Component,ViewChild, ElementRef } from '@angular/core';
import { MdSidenav } from '@angular/material'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild('start2') MdSidenav:MdSidenav;

  dummyFunction() {
    // this.mdSidenav.nativeElement.toggle();
    this.MdSidenav.toggle();
  }
  
}
