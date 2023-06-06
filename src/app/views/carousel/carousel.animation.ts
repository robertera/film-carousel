import {style, animate, animation} from '@angular/animations';

export enum carouselAnimation{
  Fade = 'fade'
}

export const fadeIn = animation([
  style({opacity: 0}),
  animate('{{time}} ease-in-out', style({opacity: 1})),
]);

export const fadeOut = animation ([
  animate('{{time}} ease-in-out', style({opacity: 0}))
]);
