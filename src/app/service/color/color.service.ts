import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ColorService {
  public theme: Object;
  constructor() {

  }
  private dataObs$ = new Subject();
  
    getData() {
        return this.dataObs$;
    }

    updateData(data) {
        this.dataObs$.next(data);
  }
}
