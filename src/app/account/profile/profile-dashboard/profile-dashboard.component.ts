import { Component , OnInit } from '@angular/core';
import { AuthenticationService } from '../../../authentication/authentication.service';

@Component({

  'selector' : 'app-profile-dashboard',

  'templateUrl' : './profile-dashboard.component.html',

  'styleUrls' : ['./profile-dashboard.component.css']

})

export class ProfileDashboardComponent implements OnInit {

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
