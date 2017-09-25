import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
// import observable
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
import { Router } from "@angular/router"
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'


@Injectable()
export class LoginServiceService {

  constructor(private http: Http, private router:Router) { 
    
  }
  login(id:string, password:string) {
    this.http.post('/api/auth', { id:id, password:password }).subscribe((data)=>{
      let res = JSON.parse(data.text())
      localStorage.setItem('user', JSON.stringify({user:id, token:res.token}));
      this.router.navigate(['/admin/blog']);
      return true;
    }, (error)=>{
      return false;
    });
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  islogin (): boolean {

    if(localStorage.getItem('user')) {
      // let token = JSON.parse(localStorage.getItem('user'));
      // console.log(token);
      this.http.get('/api/auth/' + localStorage.getItem('user')).subscribe((data)=>{
        console.log("cnmbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
        return true
      }, (error)=>{
          console.log(error);
          localStorage.clear();
          return false;
       });
      return true;    
    }
    else {
     
      return false;
      
    }
  }
}
