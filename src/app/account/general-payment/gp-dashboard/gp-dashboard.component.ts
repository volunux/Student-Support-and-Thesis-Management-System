import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { GeneralPaymentService } from '../general-payment.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { General } from '../general';
import { listAnimation } from '../../../animations';
import { LoadingBarService } from '../../../general/loading-bar.service';

@Component({

  'selector' : 'app-gp-dashboard',

  'templateUrl' : './gp-dashboard.component.html',

  'styleUrls' : ['./gp-dashboard.component.css'] ,

  'providers' : [ErrorMessagesService] ,

  'animations' : [listAnimation]

})

export class GeneralPaymentDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute , private gps : GeneralPaymentService , public ems : ErrorMessagesService ,

              private aus : AuthenticationService , private router : Router , private lbs : LoadingBarService) { 

  }

  public systemType : string;

  public title : string;
  
  public view : string;

  public entries : { [key : string] : any }[];

  public error : { [key : string] : any };

  public isError : boolean = false;

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.dashboard.systemType;

    this.title = data.dashboard.title;

    this.view = data.dashboard.view;

    this.isLoading = true;

  	this.gps.managePayment()

  		.subscribe((result) => {

        if (result == null) {

          this.isLoading = false;

          this.isError = true;

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

        else if (result != null && result.length > 0) {

          this.isLoading = false;

         this.entries = result; } });

    }

  get canVerify() : boolean {

    return ['student' , 'departmentPresident' , 'facultyPresident'].indexOf(this.aus.userRole) < 0;
  }

  public loadLink(link) : void {

    this.lbs.loadLink(link);
  }

}