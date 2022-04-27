import {
  trigger,
  query,
  style,
  animate,
  transition,
  AnimationTriggerMetadata,
  stagger,
} from '@angular/animations';

const defaultPosition: string = 'translate(0,0)';
const leftPosition: string = 'translate(-100%,0)';
const rightPosition: string = 'translate(100%,0)';
const topPosition: string = 'translate(0,-100%)';
const bottomPosition: string = 'translate(0,100%)';
const animationTiming: string = '0.7s ease-in-out';

export const leftContentAnimation: AnimationTriggerMetadata = trigger('leftContentAnimation', [
  transition(':enter' , [
    style({ transform: leftPosition }),
    animate(animationTiming, style({ transform: defaultPosition })),
  ]),
  transition(':leave' , [
    style({ transform: defaultPosition }),
    animate(animationTiming, style({ transform: leftPosition })),
  ]),
]);

export const rightContentAnimation: AnimationTriggerMetadata = trigger('rightContentAnimation', [
  transition(':enter' , [
    style({ transform: rightPosition }),
    animate(animationTiming, style({ transform: defaultPosition })),
  ]),
  transition(':leave' , [
    style({ transform: defaultPosition }),
    animate(animationTiming, style({ transform: rightPosition })),
  ]),
]);

export const bottomContentAnimation: AnimationTriggerMetadata = trigger('bottomContentAnimation', [
  transition(':enter' , [
    style({ transform: bottomPosition }),
    animate(animationTiming, style({ transform: defaultPosition })),
  ]),
  transition(':leave' , [
    style({ transform: defaultPosition }),
    animate(animationTiming, style({ transform: bottomPosition })),
  ]),
]);

export const menuAnimation: AnimationTriggerMetadata = trigger('menuAnimation', [
  transition('void => left' , [
    style({ transform: rightPosition }),
    animate(animationTiming, style({ transform: defaultPosition })),
  ]),
  transition('left => void' , [
    style({ transform: defaultPosition }),
    animate(animationTiming, style({ transform: rightPosition })),
  ]),
  transition('void => right' , [
    style({ transform: leftPosition }),
    animate(animationTiming, style({ transform: defaultPosition })),
  ]),
  transition('right => void' , [
    style({ transform: defaultPosition }),
    animate(animationTiming, style({ transform: leftPosition })),
  ]),
  transition('void => bottom' , [
    style({ transform: topPosition }),
    animate(animationTiming, style({ transform: defaultPosition })),
  ]),
  transition('bottom => void' , [
    style({ transform: defaultPosition }),
    animate(animationTiming, style({ transform: topPosition })),
  ]),
]);