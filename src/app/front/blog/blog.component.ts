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
  

  constructor(private http:Http, private route: ActivatedRoute,
  private renderer: Renderer2) { 
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

    ngAfterViewInit (){
    this.blog.changes.subscribe(
      () => 
      {
        let windowsize = window.innerHeight;
        let maxheight  = windowsize - 230 ;
        // console.log(maxheight);
        // this.renderer.setStyle(this.blogs_c.nativeElement, "height", '1000' + "px");  

        // console.log(document.getElementById("cnm").offsetHeight);
        if(document.getElementById("cnm").offsetHeight < maxheight ) {
         
          this.renderer.setStyle(this.blog_c.nativeElement, "height", maxheight + "px");  
        }
        

        
    }, (Error)=>{
      console.log("this is error from blogs_container");
    }
      
    )




  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
    

        let windowsize = window.innerHeight;
        let maxheight  = windowsize - 230 ;
        // console.log(maxheight);
        // this.renderer.setStyle(this.blogs_c.nativeElement, "height", '1000' + "px");  

        // console.log(document.getElementById("cnm").offsetHeight);
        if(document.getElementById("cnm").offsetHeight >= maxheight ) {
              console.log("remove");
              this.renderer.removeStyle(this.blog_c.nativeElement, "height");
            }
            else {
              this.renderer.setStyle(this.blog_c.nativeElement, "height", maxheight + "px");  
              
            }




    }



}
