import {style, animate, animation, keyframes} from '@angular/animations';


export enum carouselAnimation {
  Slide = 'slide',
}

export const slideIn = animation([
  animate('{{time}}', keyframes([
    style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }), // elemento atual
    style({ opacity: 0, transform: 'translateX(0)', offset: 0.99 }), // elemento seguinte com opacidade 0
    style({ opacity: 1, transform: 'translateX(0)', offset: 1 }), // elemento seguinte com opacidade 1
  ]))
]);

export const slideOut = animation([
  animate('{{time}}', keyframes([
    style({ opacity: 1, transform: 'translateY(0)', offset: 0 }), // elemento atual
    style({ opacity: 0, transform: 'translateY(100%)', offset: 0.01 }), // elemento seguinte com opacidade 0
    style({ opacity: 0, transform: 'translateY(0)', offset: 1 }), // elemento seguinte com opacidade 0
  ]))
]);
