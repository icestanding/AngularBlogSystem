import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private result: Number;
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
      this.http.post('/api/login', {"server": "hello"}).subscribe(data => {
        this.result = data['result'];
        console.log("this is the fking result", this.result);
    })

  }
  logout() {
      this.http.post('/api/logout', {"server": "hello"}).subscribe(data => {
        this.result = data['result'];
        console.log("this is the fking result", this.result);
    })
  }

}
