import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralPaymentService } from '../general-payment.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { General } from '../general';

@Component({

  'selector' : 'app-general-payment-dashboard',

  'templateUrl' : './general-payment-dashboard.component.html',

  'styleUrls' : ['./general-payment-dashboard.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class GeneralPaymentDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute , private gps : GeneralPaymentService , public ems : ErrorMessagesService ,

              private aus : AuthenticationService) { 

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

  	this.gps.managePayment()

  		.subscribe((result) => {

        if (result == null) {

          this.isError = true;

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

        else if (result != null && result.length > 0) {

         this.entries = result; } });

    }

  get canVerify() : boolean {

    return ['student' , 'departmentPresident' , 'facultyPresident'].indexOf(this.aus.userRole) < 0;
  }
}
