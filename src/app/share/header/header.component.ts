import { Component, OnInit, Output, EventEmitter,Inject, HostListener, ViewChild, ElementRef} from '@angular/core';
import { ThemeDirective } from '../../theme/theme.directive'
import { DOCUMENT }from '@angular/platform-browser'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private color:string;
  @Output() event = new EventEmitter();
  @ViewChild(ThemeDirective) vc:ThemeDirective; 
  public transform:{
    'header'?: boolean;
    'headerfix'?: boolean;
  };
  constructor() {
     this.transform = {'header':true, 'headerfix': false};
     this.color = "none"; 
  }
  ngOnInit() {}

    // when reach 200 change theme
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log(number);
    if(number >= 200) {  
      this.transform['header'] = false;
      this.transform['headerfix'] = true;
    }
    else if (number< 200) {
      this.transform['header'] = true;
      this.transform['headerfix'] = false;
    }
  }

  colorchange(inside) {
    this.vc.changeColor("red");
  }
  sidebar(e){
    this.event.emit(e);
  }
}
