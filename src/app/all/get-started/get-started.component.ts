import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { fadeAnimation } from '../../animations';
import { LoadingBarService } from '../../general/loading-bar.service';

@Component({

  'selector' : 'app-get-started',

  'templateUrl' : './get-started.component.html',

  'styleUrls' : ['./get-started.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GetStartedComponent implements OnInit {

  constructor(private auth : AuthenticationService , private router : Router , private lbs : LoadingBarService) { 

  }

  ngOnInit() : void {
  
  }

  get isLoggedIn() : boolean {

		return this.auth.isLoggedIn();  	
  }

  public loadLink(link) : void {

    this.lbs.loadLink(link);
  }

}
