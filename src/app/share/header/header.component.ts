import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { ThemeDirective } from '../../theme/theme.directive'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private color:string;
  @Output() event = new EventEmitter();
  @ViewChild(ThemeDirective) vc:ThemeDirective; 
  constructor() {
    this.color = "none";
   }
  ngOnInit() {
  }
  toggle(e) {
    this.event.emit(e);
  
  }
  colorchange(inside) {
    console.log(inside);
    this.vc.changeColor("red");
  }
}
