import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gr-homepage',

  'templateUrl' : './gr-homepage.component.html',

  'styleUrls' : ['./gr-homepage.component.css'] ,

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
