import { Component, OnInit,  Inject} from '@angular/core';
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
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs: {};
  constructor(public dialog: MatDialog, private http: Http, private router:Router) {     this.http.get("/api/blog").subscribe((data)=>{
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
      this.http.delete('/api/blog/' + blog._id).subscribe();

    this.http.get("/api/blog").subscribe((data)=>{
      // console.log(data.text());
      this.blogs = JSON.parse( data.text());
      
      // console.log(this.blogs);
      // return true;
    }, (error)=>{
      // return false;
      console.log("error cnm");
    });
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

} 

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'delete.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}