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
  login() {
      this.http.post('/api/user', {"server": "hello"}).subscribe(data => {
        this.result = data;
        // console.log("this is the fking result", this.result);
        localStorage.setItem('login', JSON.stringify({use:"hello", token:data['token']}));
        console.log("set successful");
        console.log(JSON.parse(localStorage.getItem('login')));
    }, error=> {
      console.log("fuck up");
    })

  }
  logout() {
      this.auth.logout();
  }

}
