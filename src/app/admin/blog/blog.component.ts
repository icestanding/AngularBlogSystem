import { Component, OnInit} from '@angular/core';
import { HttpModule, Http } from '@angular/http';
// import observable
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
import { Router } from '@angular/router'
// import from 'angular'


// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs: {};
  constructor(private http: Http, private router:Router) {     this.http.get("/blog").subscribe((data)=>{
      // console.log(data.text());
      this.blogs = JSON.parse( data.text());
      
      // console.log(this.blogs);
      // return true;
    }, (error)=>{
      // return false;
      console.log("error cnm");
    });

  }
  
  ngOnInit() {
  }
  show(blog) {
      this.router.navigateByUrl('admin/editor/' + blog._id);
  }
  delete(blog) {
    console.log("fuck")
      this.http.delete('/blog/' + blog._id).subscribe();

    this.http.get("/blog").subscribe((data)=>{
      // console.log(data.text());
      this.blogs = JSON.parse( data.text());
      
      // console.log(this.blogs);
      // return true;
    }, (error)=>{
      // return false;
      console.log("error cnm");
    });
  }

} 
