import { Component , OnInit } from '@angular/core';

import { ActivatedRoute , Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';

@Component({

  'selector' : 'app-navigation-bar',

  'templateUrl' : './navigation-bar.component.html',

  'styleUrls' : ['./navigation-bar.component.css'] ,

})

export class NavigationBarComponent implements OnInit {

  constructor(private aus : AuthenticationService , private router : Router) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  ngOnInit() : void {

  }

  get isLoggedIn() : boolean {

		return this.aus.isLoggedIn();  	
  }

  get isAdmin() : string {

  	return ['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.aus.userRole) > -1 ? '/' : '/';
  }

  get isAdminStatus() : boolean {

    return ['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.aus.userRole) > -1;    
  }

  public signOut(evt) : any {

      evt.preventDefault();

      evt.stopPropagation();

      this.aus.logout();

      return this.router.navigate(['/']);
  }

  public tryAccount() : void {

let credentials = {'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjY4NGVkYTVjMjQzYTEzNTQ1N2QxNmUiLCJlbWFpbF9hZGRyZXNzIjoic2hhdHVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJTaGF0dSIsInJvbGUiOiJzdHVkZW50IiwiZGVwYXJ0bWVudCI6IkFncmljdWx0dXJlIGFuZCBCaW8tUmVzb3VyY2VzIEVuZ2luZWVyaW5nIiwiZmFjdWx0eSI6IkFncmljdWx0dXJlIGFuZCBBZ3JpY3VsdHVyYWwgVGVjaG5vbG9neSIsInVuaXQiOm51bGwsInN0YXR1cyI6InBlbmRpbmciLCJleHAiOjE2MDk4NTA2MzgsImlhdCI6MTYwOTI0NTgzOH0.kCfdhG83y243tqqk3LpIVW6_tpzxf29muGYl8Vp95y4' , 's_id' : '5f684eda5c243a135457d16e'};

      this.aus.saveToken(credentials);

      this.aus.saveUserId(credentials);

      this.router.navigate(['/account' , 'profile']);

  }

}
