import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../animate'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
 
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
