import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public logoPath:string;    
  constructor(private router: Router) {
    this.logoPath = '../../assets/img/logo.jpg'
  }
  ngOnInit() {
  }
}
