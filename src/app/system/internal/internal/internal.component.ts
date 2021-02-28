import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from '../../../animations';

@Component({

  'selector' : 'app-internal',

  'templateUrl' : './internal.component.html',

  'styleUrls' : ['./internal.component.css'] ,

  'animations' : [fader]

})

export class InternalComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

   getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData;
  }


}
