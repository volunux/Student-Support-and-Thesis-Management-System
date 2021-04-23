import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-user-dashboard',

  'templateUrl' : './user-dashboard.component.html',

  'styleUrls' : ['./user-dashboard.component.css'] ,

  'animations' : [fadeAnimation]

})

export class UserDashboardComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  public systemType : string = 'User';

  public title : string = this.systemType;

  public view : string = 'gen-internal';

}
