import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, Routes, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { MdSidenav } from '@angular/material'
import { LoginServiceService } from '../service/login/login-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animation
})


export class LoginComponent implements OnInit {
  
  @ViewChild('start2') MdSidenav:MdSidenav;
  private router: Router;
  data:string;
  constructor(private _router: Router, private login: LoginServiceService) {
   
  
  }
  ngOnInit() {}
  dummyFunction() {
    this.MdSidenav.toggle();
  }
}
