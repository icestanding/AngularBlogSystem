import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private result: Object;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    // this.http.get('/api/hello').subscribe(data => {
    //     this.result = data['result'];
    //     console.log("this is the fking result", this.result);
    // })
    //   this.http.post('/api/login', {"server": "hello"}).subscribe(data => {
    //     this.result = data['result'];
    //     console.log("this is the fking result", this.result);
    // }) 
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
      // this.http.post('/api/logout', {"server": "hello"}).subscribe(data => {
      //   this.result = data['result'];
  }

}
