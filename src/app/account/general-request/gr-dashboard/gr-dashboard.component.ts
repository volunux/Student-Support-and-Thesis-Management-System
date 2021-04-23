import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { GeneralRequestService } from '../general-request.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { General } from '../general';
import { listAnimation } from '../../../animations';
import { LoadingBarService } from '../../../general/loading-bar.service';

@Component({

  'selector' : 'app-gr-dashboard',

  'templateUrl' : './gr-dashboard.component.html',

  'styleUrls' : ['./gr-dashboard.component.css'] ,

  'providers' : [ErrorMessagesService] ,

  'animations' : [listAnimation]

})

export class GeneralRequestDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute , private grs : GeneralRequestService , public ems : ErrorMessagesService , private router : Router , private lbs : LoadingBarService) { 

  }

  public systemType : string;

  public title : string;
  
  public view : string;

  public entries : { [key : string] : any }[];

  public error : { [key : string] : any };

  public isError : boolean = false

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.dashboard.systemType;

    this.title = data.dashboard.title;

    this.view = data.dashboard.view;

    this.isLoading = true;

  	this.grs.manageRequest()

  		.subscribe((result) => {

        if (result == null) {

          this.isLoading = false;

          this.isError = true;

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

        else if (result != null && result.length > 0) {

         this.isLoading = false;

         this.entries = result; } }); }

  public loadLink(link) : void {

    this.lbs.loadLink(link);
  }

}