import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http'
import { ActivatedRoute } from '@angular/router';
// import { }

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],

 
})
export class BlogComponent implements OnInit {

  public blogs;
  public id;
  constructor(private http:Http, private route: ActivatedRoute) { 
    window.scrollTo(0, 0);
   

  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      console.log(params.id);
      this.http.get("/api/blog/"+params.id).subscribe((data)=>{
        console.log(data.text());
       
        this.blogs =  JSON.parse(data.text());
       
        // remove html tag, slicing to abstract
       
        // return true;
      }, (error)=>{
        // return false;
        console.log("error cnm");
      });

    })
    
  }



}
