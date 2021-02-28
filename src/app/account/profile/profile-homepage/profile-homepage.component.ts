import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from '../../../animations';

@Component({

  'selector' : 'app-profile-homepage',

  'templateUrl' : './profile-homepage.component.html',

  'styleUrls' : ['./profile-homepage.component.css'] ,

  'animations' : [fader]

})

export class ProfileHomepageComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
	}

  public getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData;
  }


}
