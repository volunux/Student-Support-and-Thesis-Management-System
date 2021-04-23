import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../../animations';

@Component({

  'selector' : 'app-mr-homepage',

  'templateUrl' : './mr-homepage.component.html',

  'styleUrls' : ['./mr-homepage.component.css'] ,

  'animations' : [slideInAnimation]

})

export class MiscRequestHomepageComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
