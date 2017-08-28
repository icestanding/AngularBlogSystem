import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private myset;
  constructor() { 
    this.myset={'alternate-theme':true};
  }

  ngOnInit() {
    
  }
  change() {
    
    this.myset['alternate-theme'] = false;
  }
  

}
