import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public myset: {
    'alternate-theme'?: boolean;
    'main-theme'?: boolean;
  };
  @Output() colorchange = new EventEmitter();
  constructor() { 
    this.myset={'alternate-theme':true, 'main-theme': false};
  }

  ngOnInit() {
    
  }
  change(e) {
    this.colorchange.emit(e);
  }
  

}
