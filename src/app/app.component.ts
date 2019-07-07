import { Component,ViewChild, ElementRef, Inject, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material'
import { Router, NavigationStart,NavigationCancel, Event as NavigationEvent } from '@angular/router';
import { LoginServiceService } from './service/login/login-service.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
}
