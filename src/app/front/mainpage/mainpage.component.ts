import { Component, OnInit } from '@angular/core';;
import { HttpModule, Http } from '@angular/http';
// import observable
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  public blog;

  constructor(private http: Http) { 
    this.http.get("/api/blog").subscribe((data)=>{
      console.log(data.text());
      this.blog =  data.text();
      // return true;
    }, (error)=>{
      // return false;
      console.log("error cnm");
    });
  }

  ngOnInit() {
  }


}
