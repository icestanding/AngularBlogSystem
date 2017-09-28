import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';



@Component({
  selector: 'blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.scss'],
  animations: [
    trigger('bloganimation',[
      state('small', style({
        transform:'scale(1)',
      })),
      state('large', style({
        transform:'scale(1.2)',
      })),
      transition('small => large', animate('100ms ease-in')),
      transition('large => small', animate('100ms ease-out')),
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
      ])
      
    ])
  ]
})
export class BlogcardComponent implements OnInit {
  state: string = 'small';
  constructor() { 
   
  }

  ngOnInit() {
  }
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
