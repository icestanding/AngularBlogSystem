import { Component } from '@angular/core';
import { routerTransition } from './router.animations';

@Component({
  selector: 'about',
  template: `<h1>About</h1>`,
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class About { }