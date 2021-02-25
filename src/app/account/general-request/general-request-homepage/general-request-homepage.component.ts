import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../../animations';

@Component({

  'selector' : 'app-general-request-homepage',

  'templateUrl' : './general-request-homepage.component.html',

  'styleUrls' : ['./general-request-homepage.component.css'] ,

  'animations' : [slideInAnimation]

})

export class GeneralRequestHomepageComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
