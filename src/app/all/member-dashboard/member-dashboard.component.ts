import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { listAnimation } from '../../animations';
import { LoadingBarService } from '../../general/loading-bar.service';

@Component({

  'selector' : 'app-member-dashboard',

  'templateUrl' : './member-dashboard.component.html',

  'styleUrls' : ['./member-dashboard.component.css'] ,

  'animations' : [listAnimation]

})

export class MemberDashboardComponent implements OnInit {

  constructor(private aus : AuthenticationService , private router : Router , private lbs : LoadingBarService) { 

  }

  ngOnInit() : void {
  
  }

  public systemType : string = 'Profile';

  public title : string = 'Member Dashboard';

  public view : string = 'user-dashboard';

  public entries : { [key : string] : string }[] = [

    {'slug' : '/general-request' , 'title' : 'Manage Request' } ,

    {'slug' : '/misc-request' , 'title' : 'Misc Request' } ,

    {'slug' : '/refund' , 'title' : 'Manage Refund'} ,

    {'slug' : '/general-payment' , 'title' : 'Manage Payment' }];

  get canManage() : boolean {

    return ['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.aus.userRole) > 0; 
  }

  get notStudent() : boolean {

    return ['student' , 'departmentPresident' , 'facultyPresident'].indexOf(this.aus.userRole) < 0; 
  }

  get canManageAcctReq() : boolean {

    return ['superAdministrator'].indexOf(this.aus.userRole) > -1;
  }

  get isLoggedIn() : boolean {

    return this.aus.isLoggedIn();
  }

  public loadLink(link) : void {

    this.lbs.loadLink(link);
  }

}
