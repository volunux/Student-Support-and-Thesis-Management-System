import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-general-request-status-dashboard',

  'templateUrl' : './grs-dashboard.component.html',

  'styleUrls' : ['./grs-dashboard.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralRequestStatusDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public canCreate : boolean;

  ngOnInit() : void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.dashboard.systemType;

  	this.title = data.dashboard.title;

  	this.view = data.dashboard.view;

    this.canCreate = data.dashboard.canCreate != undefined ? data.dashboard.canCreate : true;
  
  }

}
