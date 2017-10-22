import {trigger, state, animate, style, transition,group, query} from '@angular/animations';

export function routerTransition() {
  return slideToLeft();
}



export function slideToLeft() {
  return trigger('routerTransition', [
  
    transition(':enter', [
      style({transform: 'translateX(100%)',overflow:"hidden"}),
      animate('0.9s ease-in-out', style({transform: 'translateX(0%)', overflow:"hidden"}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.2s ease-in-out', style({transform: 'translateX(-100%)'}))
    ]),

       
    transition('*=>*', [
      group([
        query(':enter', [query('mat-card',[style({transform: 'translateX(100%)'}),animate('0.2s ease-in-out', style({transform: 'translateX(0)'}))], { limit: 1 })
              ]),    
        query(':leave', [query('mat-card',[style({top: 0,position:'absolute',width:"100%", overflow:"visible"}),animate('0.2s ease-in-out', style({transform: 'translateX(-100%)'}))], { limit: 1 })
              ]),   

       ] )
       
    ]),
  ])
}

