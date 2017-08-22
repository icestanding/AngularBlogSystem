import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animation
  animations: [
    trigger('flyout',[
      state('in', style({transform: 'translateX(0)'})),

      transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)]),

      transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
    ]),
  ]

})


export class LoginComponent implements OnInit {
  
  // for basic setting
  public errors;
  public logoPath:string;
  public hidden:boolean;
  color: string = 'primary';
  determinateProgressValue: number = 30;


  state: string = 'small';
 

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

  fogetpsw() {
    this.hidden = true;
  }
  sample() {
    this.hidden = true;
     this.state = (this.state === '*' ? 'void' : '*');
  }

}
