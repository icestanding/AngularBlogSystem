import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
// import { NgIf } from '@angular/common';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  
  // for basic setting
  public errors;
  public logoPath:string;
  public hidden:boolean;
  color: string = 'primary';
  determinateProgressValue: number = 30;
 

  // initial part
  constructor(private router: Router) {
    this.logoPath = '../../assets/img/logo.jpg';
    this.errors = "true";
    this.hidden = false;
  }

  ngOnInit() {}


  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
  
  stepDeterminateProgressVal(val: number) {
    this.determinateProgressValue = this.clampValue(val + this.determinateProgressValue);
  }

  private clampValue(value: number) {
    return Math.max(0, Math.min(100, value));
  }
  signUp () {
    this.hidden = true;
  }
}
