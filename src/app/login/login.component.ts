import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { MdSidenav } from '@angular/material'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animation
})


export class LoginComponent implements OnInit {
  
  @ViewChild('start2') MdSidenav:MdSidenav;

  data:string;
  constructor(private router: Router) {}
  ngOnInit() {}
  dummyFunction() {
    this.MdSidenav.toggle();
  }
}
