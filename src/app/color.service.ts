import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
  public theme: Object;
  constructor() {
    this.theme = {
      'main-theme': true,
      'alternate-theme': false
    }   
  }
  color(): Object {
    return this.theme;
  };
}
