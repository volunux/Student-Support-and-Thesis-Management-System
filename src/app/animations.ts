import {
  trigger, animateChild, group, keyframes ,
  transition, animate, style, query , stagger
} from '@angular/animations';

// Routable animations
export const slideInAnimation =
  
  trigger('routeAnimation', [
  
    transition('* <=> *' , [
  
      style({ 'position': 'relative' }),
  
      query(':enter, :leave', [
  
        style({
          'position': 'absolute',
          'top': 0,
          'left': 0,
          'width': '100%'
        })
      ] , { 'optional': true }),
  
      query(':enter', [
        style({ left: '-100%'})  ] , { 'optional': true }),
  
      query(':leave', animateChild() , { 'optional': true }),
  
      group([
  
        query(':leave', [
          animate('300ms ease-out', style({ 'left': '100%'}))] , { 'optional': true }),
  
        query(':enter', [  
          animate('300ms ease-out', style({ left: '0%'}))] , { 'optional': true })  ]),
  
      query(':enter', animateChild()),  ])
  
  ]);

  export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ 'opacity': 0 }), animate('800ms', style({ 'opacity': 1 }))]
  ),
  transition(':leave',
    [style({ 'opacity': 1 }), animate('800ms', style({ 'opacity': 0 }))]
  )
]);


  export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ 'opacity': 0 }), stagger('400ms', animate('600ms ease-out', style({ 'opacity': 1 })))],
      { 'optional': true }
    ),
    query(':leave',
      animate('200ms', style({ 'opacity': 0 })),
      { 'optional': true }
    )
  ])
]);


  /* Route Animations */

  export const fadeAnimationRoute = trigger('fadeAnimationRoute', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);


export const fader =
  trigger('routeAnimationFader', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ] , { 'optional': true }),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ] , { 'optional': true })
    ]),
]);

export const stepper =
  trigger('stepper', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
        }),
      ]),
      group([
        query(':enter', [
          animate('2000ms ease', keyframes([
            style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
            style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
            style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
          ])),
        ]),
        query(':leave', [
          animate('2000ms ease', keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
            style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
          ])),
        ])
      ]),
    ])

]);