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
    this.http.get('/api/hello').subscribe(data=>{
        this.result = data['result'];
    })
  }

}
