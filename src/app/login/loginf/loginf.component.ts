import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../login-service.service';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-loginf',
  templateUrl: './loginf.component.html',
  styleUrls: ['./loginf.component.scss']
})
export class LoginfComponent implements OnInit {

  constructor(private router: Router, private login: LoginServiceService) { }

  ngOnInit() {
  }
  clicked() {
    if(this.login.login("hah","123")) {
      this.router.navigateByUrl('success')
    }
  }
}
