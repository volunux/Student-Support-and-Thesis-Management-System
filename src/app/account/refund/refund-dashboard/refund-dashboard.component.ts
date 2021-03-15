import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-refund-dashboard',

  'templateUrl' : './refund-dashboard.component.html',

  'styleUrls' : ['./refund-dashboard.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RefundDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute , private auth : AuthenticationService) { 

  }

  public systemType : string;

  public title : string;
  
  public view : string;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.dashboard.systemType;

    this.title = data.dashboard.title;

    this.view = data.dashboard.view;
  
  }

  get canCreate() : boolean {

    return ['student' , 'departmentPresident' , 'facultyPresident'].indexOf(this.auth.userRole) > -1;
  }

  get canDeleteAll() : boolean {

    return this.auth.isSuperAdministrator;
  }

}
