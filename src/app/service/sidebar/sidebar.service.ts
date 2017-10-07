import { Injectable,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarService {
  private message = new Subject<string>();
  messageO = this.message.asObservable();
  private setMessage(message: string) {
    this.message.next(message);
  }
  public success(message:string) {
    this.setMessage(message);
   
  }
}
