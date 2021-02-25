import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../../animations';

@Component({

  'selector' : 'app-general-payment-homepage',

  'templateUrl' : './general-payment-homepage.component.html',

  'styleUrls' : ['./general-payment-homepage.component.css'] ,

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
