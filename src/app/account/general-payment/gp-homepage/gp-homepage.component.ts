import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gp-homepage',

  'templateUrl' : './gp-homepage.component.html',

  'styleUrls' : ['./gp-homepage.component.css'] ,

  'animations' : [slideInAnimation]

})
export class GeneralPaymentHomepageComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  public getAnimationData(outlet: RouterOutlet) : any {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
