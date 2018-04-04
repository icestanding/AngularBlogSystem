import { Component, OnInit } from '@angular/core';
import { ColorService } from '../.././service/color/color.service';
// import observable
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
import { Router } from '@angular/router'
// import from 'angular'


// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public background_theme: {
    'primary-background'?: boolean;
    'second-background'?: boolean;
  };
  public border_theme: {
    'primary-border'?: boolean;
    'second-border'?: boolean;
  }
  constructor(public colorservice: ColorService) {
    this.background_theme = {
      'primary-background': false,
      'second-background': true
    }
    this.border_theme = {
      'primary-border': false,
      'second-border': true
    }
  }

  ngOnInit() {
    this.colorservice.getData().subscribe(data=> {
      this.background_theme = {
        'primary-background': data[0],
        'second-background': data[1]
      }
      this.border_theme = {
        'primary-border': data[0],
        'second-border':  data[1]
      }
    })
  }

}
