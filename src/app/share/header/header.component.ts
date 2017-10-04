import { Component, OnInit, Output, EventEmitter,Inject, HostListener, ViewChild, ElementRef,
} from '@angular/core';
import { ThemeDirective } from '../../directive/theme/theme.directive'
import { DOCUMENT }from '@angular/platform-browser'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // private color:string;
  public mytheme: {
    'alternate-theme'?: boolean;
    'main-theme'?: boolean;
    'main'?: boolean;
    'mainfix'?: boolean;
  };


  @Output() event = new EventEmitter();
  @Output() colorevent = new EventEmitter();
  @ViewChild(ThemeDirective) vc:ThemeDirective; 
   @ViewChild('nav') nav;
  public transform:{
    'header'?: boolean;
    'headerfix'?: boolean;
  };
  constructor() {
     this.transform = {'header':true, 'headerfix': false};
    //  this.color = "none"; 
         this.mytheme = {
                    'alternate-theme': true, 
                    'main-theme': false,
                  };
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

  color(e) {
    this.colorevent.emit(e);
  }
  sidebar(e){
    this.event.emit(e);
  }
  hah() {
    this.nav.changenav();
  }

}
