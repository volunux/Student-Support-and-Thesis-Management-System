import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { GeneralPayment } from '../general-payment';
import { GeneralPaymentService } from '../general-payment.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gp-entry-receipt',

  'templateUrl' : './gp-entry-receipt.component.html',

  'styleUrls' : ['./gp-entry-receipt.component.css'] ,

  'providers' : [ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class GeneralPaymentEntryReceiptComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public gps : GeneralPaymentService , 

  						public ems : ErrorMessagesService , private aus : AuthenticationService) {

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public entry : GeneralPayment = null;

  public error : { [key : string] : any };

  public isError : boolean = false;

  private eslug : string;

  public entryStatuses : { [key : string] : any }[];

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false

  public entryChangesT : any;

  public entryForm : FormGroup;

  public payment_ref_checked : string;

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.verify.systemType;

    this.title = data.verify.title;

    this.view = data.verify.view;  

    this.viewWord = data.verify.viewWord;

    this.link = data.verify.link;

    this.gps.$systemType = this.systemType;

    this.gps.$sa = data.verify.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            this.isLoading = true;

          	return this.gps.getStatus(); })
        )
          .subscribe((result : { [key : string] : any }) => {

  					if (result == null) { 

              this.isLoading = false;

              this.isError = true;

              this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

            else if (result != null) {

              this.isLoading = false;

            	this.entryForm = new FormGroup({

            		'payment_reference' : new FormControl('' , [Validators.required , Validators.minLength(4) , Validators.maxLength(30)]) }); } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }

  verifyPayment(body : { [key : string] : any }) : void {

  	if (this.payment_ref_checked != body.payment_reference) {

  	this.payment_ref_checked = body.payment_reference;

  	this.entry = null;

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.gps.confirmStatus(body)

      .subscribe((result : { [key : string] : any }) => {

        if (result == null) { this.isFormSubmitted = false;

				this.isFormProcessing = false;

        this.isError = true;

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

       else if (result != null) {

						this.isFormProcessing = false;

           this.isFormSubmitted = false; 

         		this.entry = result; } }); }

  }

  get userRole() : string {

  	return this.aus.userRole;
  }

  get payment_reference() : FormControl {

  	return this.entryForm.get('payment_reference') as FormControl;
  }

  get isFormValid() : boolean {

  	return this.entryForm.valid;
  }

}
