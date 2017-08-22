import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loginheader',
  templateUrl: './loginheader.component.html',
  styleUrls: ['./loginheader.component.scss']
})
export class LoginheaderComponent implements OnInit {
  show: string;

  @Output() event = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  toggle(e) {
    this.event.emit(e);
    this.show = "this is my function";
  }
}
