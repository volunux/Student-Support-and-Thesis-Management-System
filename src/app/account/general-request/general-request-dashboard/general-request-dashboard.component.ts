import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralRequestService } from '../general-request.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { General } from '../general';

@Component({

  'selector' : 'app-general-request-dashboard',

  'templateUrl' : './general-request-dashboard.component.html',

  'styleUrls' : ['./general-request-dashboard.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class GeneralRequestDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute , private grs : GeneralRequestService , public ems : ErrorMessagesService) { 

  }

  public systemType : string;

  public title : string;
  
  public view : string;

  public entries : { [key : string] : any }[];

  public error : { [key : string] : any };

  public isError : boolean = false

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.dashboard.systemType;

    this.title = data.dashboard.title;

    this.view = data.dashboard.view;

  	this.grs.manageRequest()

  		.subscribe((result) => {

        if (result == null) {

          this.isError = true;

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

        else if (result != null && result.length > 0) {

         this.entries = result; } }); }
}