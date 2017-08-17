import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../login-service.service';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-loginf',
  templateUrl: './loginf.component.html',
  styleUrls: ['./loginf.component.scss']
})
export class LoginfComponent implements OnInit {
  private result: any;
  constructor(private router: Router, private login: LoginServiceService) { 

  }
  ngOnInit() {
  }
  clicked() {
    let a = this.login.login('a', 's');
    this.result = a;
    this.router.navigateByUrl('/success');
  }
}
