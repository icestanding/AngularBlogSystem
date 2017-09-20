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
    if(this.myset["alternate-theme"] == true) {
      this.myset={'alternate-theme':false, 'main-theme': true};
    }
    else {
       this.myset={'alternate-theme':true, 'main-theme': false};
    }
      console.log("cnm");
   
    this.colorchange.emit(e);
  }
  

}
