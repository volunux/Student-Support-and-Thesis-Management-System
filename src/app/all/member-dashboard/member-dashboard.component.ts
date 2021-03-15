import { Component , OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import { listAnimation } from '../../animations';


@Component({

  'selector' : 'app-member-dashboard',

  'templateUrl' : './member-dashboard.component.html',

  'styleUrls' : ['./member-dashboard.component.css'] ,

  'animations' : [listAnimation]

})

export class MemberDashboardComponent implements OnInit {

  constructor(private aus : AuthenticationService) { 

  }

  ngOnInit(): void {
  
  }

  public systemType : string = 'Profile';

  public title : string = 'Member Dashboard';

  public view : string = 'upr';

  public entries : { [key : string] : string }[] = [

    {'slug' : '/general-request' , 'title' : 'Manage Request' } ,

    {'slug' : '/refund' , 'title' : 'Manage Refund'} ,

    {'slug' : '/general-payment' , 'title' : 'Manage Payment' }];

  get canManage() : boolean {

    return ['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.aus.userRole) > 0; 
  }

  get isLoggedIn() : boolean {

    return this.aus.isLoggedIn();
  }

}
