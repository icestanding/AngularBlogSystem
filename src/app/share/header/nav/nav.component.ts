import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output () event = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  toggle(e) {
    this.event.emit(e);
  }

}
