import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
// import {} from '../../service/login-service.service'
import { LoginServiceService } from '../../service/login/login-service.service'

// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})

export class LoginformComponent implements OnInit {
  // for basic setting
  public errors;
  public logoPath: string;
  public hidden: boolean;
  public username: string;
  public password: string;
  color: string = 'primary';
  determinateProgressValue: number = 30;

 

  // initial part
  constructor(private login: LoginServiceService, private route: Router) {

    this.errors = "true";
    this.hidden = false;
    this.username = "";
    this.password = "";
    
  }

  ngOnInit() {}


  UsernameFormControl = new FormControl('', [Validators.required]);
  
  stepDeterminateProgressVal(val: number) {
    this.determinateProgressValue = this.clampValue(val + this.determinateProgressValue);
  }

  private clampValue(value: number) {
    return Math.max(0, Math.min(100, value));
  }

  signUp () {
    if(this.login.login(this.username,  this.password)){
      this.route.navigateByUrl('/admin');
    }
  }


}
