import {trigger, animate, style, group, query, transition, state} from '@angular/animations';
export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({position: 'relative', opacity: 0})
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(20%)', 'background-color': 'yellow'  }),
        animate('3s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      query(':leave', [
        style({ transform: 'translateX(0%)','background-color': 'yellow'  }),
        animate('3s ease-in-out', style({ transform: 'translateX(-100%)','background-color': 'yellow'  }))
      ]),
    ])
  ])
])
