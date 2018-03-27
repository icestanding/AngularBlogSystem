import { Component, HostListener ,ViewChildren, ViewChild, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Http } from '@angular/http'
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],

 
})
export class BlogComponent implements OnInit {

  public blogs;
  public id;
  @ViewChildren('blog') blog;
  @ViewChild('blog') blog_c;
  public pageid;

  constructor(private http:Http, private route: ActivatedRoute,
  private renderer: Renderer2) { 
    window.scrollTo(0, 0);
   

  }

  ngOnInit() {
    
    this.route.params.subscribe(params=>{
      console.log(params.id);
      this.http.get("/api/blog/"+params.id).subscribe((data)=>{
        console.log(data.text());
        this.pageid = params.id;
        this.blogs =  JSON.parse(data.text());
       
      }, (error)=>{
        // return false;
        console.log("error cnm");
      });

    })    
  }
}
