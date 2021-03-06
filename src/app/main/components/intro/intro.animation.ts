import {
  trigger,
  query,
  style,
  animate,
  transition,
  AnimationTriggerMetadata,
  stagger,
} from '@angular/animations';

export const introInfoAnimation: AnimationTriggerMetadata = trigger('introInfoAnimation', [
  transition(':enter' , [
    query('div', [
      style({ opacity: 0, transform: 'translateX(-100px)' }),
      stagger(400, [
        animate('0.7s ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
  ]),
]);

export const introImageAnimation: AnimationTriggerMetadata = trigger('introImageAnimation', [
  transition(':enter' , [
    style({ opacity: 0, transform: 'translateY(-200px)' }),
    animate('0.7s ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);