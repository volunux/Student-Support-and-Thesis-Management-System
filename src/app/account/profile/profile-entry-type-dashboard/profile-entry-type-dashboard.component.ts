import { Component , OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication/authentication.service';

@Component({

  'selector' : 'app-profile-entry-type-dashboard',

  'templateUrl' : './profile-entry-type-dashboard.component.html',

  'styleUrls' : ['./profile-entry-type-dashboard.component.css']

})

export class ProfileEntryTypeDashboardComponent implements OnInit {

  constructor(private aus : AuthenticationService) { 

  }

  ngOnInit(): void {
  
  }

  public systemType : string = 'Profile';

  public title : string = 'Profile';

  public view : string = 'upr';

  get canManage() : boolean {

    return ['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.aus.userRole) > 0; 
  }

}
