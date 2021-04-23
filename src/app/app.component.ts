import { Component , OnInit } from '@angular/core';
import { RouterOutlet , Router , RouterEvent , RouteConfigLoadEnd , RouteConfigLoadStart } from '@angular/router';
import { fadeAnimation } from './animations';
import { FormControl , FormGroup } from '@angular/forms';
import { LoadingBarService } from './general/loading-bar.service';
import { AuthenticationService } from './authentication/authentication.service';


@Component({

  'selector' : 'app-root',
  
  'templateUrl' : './app.component.html',
  
  'styleUrls' : ['./app.component.css'] ,

  'animations' : [fadeAnimation] ,

})

export class AppComponent implements OnInit {

  public title : string = 'Request and Service Initialization System';

  constructor(private aus : AuthenticationService , private router : Router , public lbs : LoadingBarService) {

  }

  
  public token : string;

  public myDetails : any;

  public showFooter : boolean = false;

  public toggler : FormControl = new FormControl('' , []);

  public ngOnInit() : void {

  }

   getAnimationData(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData
  }

}
