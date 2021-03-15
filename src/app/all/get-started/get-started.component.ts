import { Component , OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import { fadeAnimation } from '../../animations';

@Component({

  'selector' : 'app-get-started',

  'templateUrl' : './get-started.component.html',

  'styleUrls' : ['./get-started.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GetStartedComponent implements OnInit {

  constructor(private auth : AuthenticationService) { 

  }

  ngOnInit() : void {
  
  }

  get isLoggedIn() : boolean {

		return this.auth.isLoggedIn();  	
  }

}
