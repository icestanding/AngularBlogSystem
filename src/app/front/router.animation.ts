import {trigger, state, animate, style, transition,group, query} from '@angular/animations';

export function routerTransition() {
  return slideToLeft();
}



function slideToLeft() {
  return trigger('routerTransition', [
  
    transition(':enter', [
      style({transform: 'translateX(100%)',}),
      animate('0.2s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.2s ease-in-out', style({transform: 'translateX(-100%)'}))
    ]),

       
    transition('*=>*', [
      group([
        query(':enter', [query('md-card',[style({transform: 'translateX(100%)'}),animate('0.2s ease-in-out', style({transform: 'translateX(0)'}))], { limit: 1 })
              ]),    
        query(':leave', [query('md-card',[style({top: 0,position:'absolute'}),animate('0.2s ease-in-out', style({transform: 'translateX(-100%)'}))], { limit: 1 })
              ]),   

       ] )
       
    ]),
  ])
}

