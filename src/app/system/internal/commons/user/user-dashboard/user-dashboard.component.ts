import { Component, OnInit } from '@angular/core';

@Component({

  'selector' : 'app-user-dashboard',

  'templateUrl' : './user-dashboard.component.html',

  'styleUrls' : ['./user-dashboard.component.css']

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
