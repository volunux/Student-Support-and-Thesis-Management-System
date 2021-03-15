import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-internal-dashboard',

  'templateUrl' : './internal-dashboard.component.html',

  'styleUrls' : ['./internal-dashboard.component.css'] ,

  'animations' : [fadeAnimation]

})

export class InternalDashboardComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  public title : string = 'Internal Dashboard';


  public entries : { [key : string] : string } = {

  'country' : 'Country' ,

  'department' : 'Department' , 

  'faculty' : 'Faculty' ,

  'level' : 'Level' ,

  'payment-type' : 'Payment Type' ,

  'payment-session' : 'Payment Session' ,

  'payment-status' : 'Payment Status' ,

  'refund-comment' : 'Refund Comment' ,

  'refund-letter' : 'Refund Letter' ,

  'refund-signature' : 'Refund Signature' ,

  'refund-stage' : 'Refund Stage' ,

  'general-request-status' : 'Request Status' ,

  'request-type' : 'Request Type' ,

  'general-request-comment' : 'General Request Comment' ,

  'request-credential' : 'Request Credential' ,

  'reply' : 'Reply' ,

  'user-role' : 'User Role' ,

  'unit' : 'Unit' ,

  'user' : 'User' ,

  'user-upload' : 'General Upload' ,

  'user-signature' : 'User Signature' ,

  'user-photo' : 'User Photo' ,

  'user-status' : 'User Status' ,

	};

}
