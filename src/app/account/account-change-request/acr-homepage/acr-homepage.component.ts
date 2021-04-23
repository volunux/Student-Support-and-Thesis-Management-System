import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../../animations';

@Component({

  'selector' : 'app-acr-homepage',

  'templateUrl' : './acr-homepage.component.html',

  'styleUrls' : ['./acr-homepage.component.css'] ,

  'animations' : [slideInAnimation]

})

export class AccountChangeRequestHomepageComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
