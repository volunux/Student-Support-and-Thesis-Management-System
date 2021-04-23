import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-refund-signature-dashboard',

  'templateUrl' : './refund-signature-dashboard.component.html',

  'styleUrls' : ['./refund-signature-dashboard.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RefundSignatureDashboardComponent implements OnInit {

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
