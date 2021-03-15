import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-internal-one-dashboard',

  'templateUrl' : './internal-one-dashboard.component.html',

  'styleUrls' : ['./internal-one-dashboard.component.css'] ,

  'animations' : [fadeAnimation]

})

export class InternalOneDashboardComponent implements OnInit {

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
