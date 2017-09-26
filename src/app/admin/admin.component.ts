import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../service/login/login-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private result: Object;


  @ViewChild('editor') editor;
  constructor(private http: HttpClient, private auth:LoginServiceService) {

  }

  ngOnInit() {
  }

  logout() {
      this.auth.logout();
  }

}
