import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animation


})


export class LoginComponent implements OnInit {
  
  data:string;
  constructor(private router: Router) {}

  ngOnInit() {}
  dummyFunction() {
    this.data = "function called";
  }

}
