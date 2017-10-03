import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from '@angular/animations';
// import { Router } from '@angular/router';


@Component({
  selector: 'blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.scss'],

})
export class BlogcardComponent implements OnInit {
  state: string = 'small';
  constructor(private router: Router) { 
   
  }

  ngOnInit() {
  }
  animateMe() {
    // this.state = (this.state === 'small' ? 'large' : 'small');
    // setTimeout(this.router.navigateByUrl('/blog'), 1000000);
   
  }

}
