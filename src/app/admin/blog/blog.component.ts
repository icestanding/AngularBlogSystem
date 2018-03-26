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
  constructor(public dialog: MatDialog, private http: Http, private router:Router) {     
    this.http.get("/api/blog").subscribe((data)=>{
      this.blogs = JSON.parse( data.text());
    }, (error)=>{
      console.log("load error");
    });

  }
  
  ngOnInit() {
  }
  show(id) {
      this.router.navigateByUrl('admin/editor/' + id);
  }
  delete(id) {
      let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: {id: id}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.http.get("/api/blog").subscribe((data)=>{
          this.blogs = JSON.parse( data.text());
          console.log("refresh")
        }, (error)=>{
          console.log("load error");
        });
      });
  }
} 



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'delete.html',
  styleUrls: ['./delete.scss']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private http: Http,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  delete(): void {
    this.http.delete('/api/blog/' + this.data.id).subscribe();
    this.dialogRef.close();
  }
  close(): void {
    console.log("cnmb");
    this.dialogRef.close();
  }

}