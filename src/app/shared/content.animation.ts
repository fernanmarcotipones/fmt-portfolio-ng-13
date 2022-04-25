import {
  trigger,
  query,
  style,
  animate,
  transition,
  AnimationTriggerMetadata,
  stagger,
} from '@angular/animations';

export const leftContentAnimation: AnimationTriggerMetadata = trigger('leftContentAnimation', [
  transition(':enter' , [
    style({ transform: 'translateX(-100%)' }),
    animate('0.7s ease-in', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave' , [
    style({ transform: 'translateX(0)' }),
    animate('0.7s ease-out', style({ transform: 'translateX(-100%)' })),
  ]),
]);

export const rightContentAnimation: AnimationTriggerMetadata = trigger('rightContentAnimation', [
  transition(':enter' , [
    style({ transform: 'translateX(100%)' }),
    animate('0.7s ease-in', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave' , [
    style({ transform: 'translateX(0)' }),
    animate('0.7s ease-out', style({ transform: 'translateX(100%)' })),
  ]),
]);