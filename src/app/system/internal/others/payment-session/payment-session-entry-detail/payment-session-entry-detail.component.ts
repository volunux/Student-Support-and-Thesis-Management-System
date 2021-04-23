import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaymentSession } from '../payment-session';
import { General } from '../general';
import { PaymentSessionService } from '../payment-session.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';
import { fadeAnimation } from '../../../../../animations';


@Component({

  'selector' : 'app-payment-session-entry-detail',

  'templateUrl' : './payment-session-entry-detail.component.html',

  'styleUrls' : ['./payment-session-entry-detail.component.css'] ,

  'providers' : [ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class PaymentSessionEntryDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private ems : ErrorMessagesService , private dps : PaymentSessionService ) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewAbbreviation : string;

  public link : string;

  public $link : string;

  public entry : PaymentSession;

  public error : General;

  public isError : boolean = false;

  public isLoading : boolean = false;

  ngOnInit() : void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.detail.systemType;

  	this.title = data.detail.title;

  	this.view = data.detail.view;

  	this.viewAbbreviation = data.detail.viewAbbreviation;

  	this.link = data.detail.link;

  	this.$link = data.detail.$link;

  	this.dps.$systemType = this.systemType;

  	this.dps.$sa = this.$link;

    this.isLoading = true;

    this.route.paramMap.pipe(

    	switchMap((params : ParamMap) => {

          let $e = params.get('entry');

          this.isLoading = true;

    			return this.dps.getEntry($e);	})
    	)
        .subscribe((result) => { 

        if (result == null) {

          this.isLoading = false;

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

          this.isError = true; }

        else if (result != null) {

          this.isLoading = false;

          this.entry = result; } });
  }

}
