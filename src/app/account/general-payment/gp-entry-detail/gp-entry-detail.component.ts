import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { GeneralPayment } from '../general-payment';
import { GeneralPaymentService } from '../general-payment.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { canUpdate } from '../roles';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gp-entry-detail',
 
  'templateUrl' : './gp-entry-detail.component.html',
 
  'styleUrls' : ['./gp-entry-detail.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class GeneralPaymentEntryDetailComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public gps : GeneralPaymentService , 

  						public ns : NotificationService , public ems : ErrorMessagesService , private aus : AuthenticationService) {

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public entry : GeneralPayment;

  public error : { [key : string] : any };

  public isError : boolean = false;

  private eslug : string;

  private pslug : string;

  public entryStatuses : { [key : string] : any }[];

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false

  public entryChangesT : any;

  public entryForm : FormGroup;

  public readyToSubmit : boolean;

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.detail.systemType;

    this.title = data.detail.title;

    this.view = data.detail.view;  

    this.viewWord = data.detail.viewWord;

    this.link = data.detail.link;

    this.gps.$systemType = this.systemType;

    this.gps.$sa = data.detail.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            let $p = params.get('payment');

            this.pslug = $p;

            this.eslug = $e;

            this.isLoading = true;

          	return this.gps.getEntry($p , $e); })
        )
          .subscribe((result : GeneralPayment) => {

  					if (result == null) { 

              this.isLoading = false;

              this.isError = true;

              this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

            else if (result != null) {

              this.isLoading = false;

    					this.entry = result; } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }

  public refundEntry() : void {

    this.gps.createRefund$(this.eslug , {'transaction' : this.entry.payment_reference})

      .subscribe((result : GeneralPayment) => {

            if (result == null) {

              this.ns.setNotificationStatus(true);

              this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not refunded.`); }

            else if (result != null && result.refunded == true) {

          this.isLoading = true;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is refunded.`); 

          this.$entryChanges(result.$data) } });
  }

  public requeryTransaction() : void {

    this.isLoading = true;

    this.gps.$verifyPayment(this.entry.payment_reference)

      .subscribe((result : GeneralPayment) => {

            if (result == null) {

              this.isLoading = false;

              this.ns.setNotificationStatus(true);

              this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`); }

            else if (result != null && result.verified == true) {

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is updated.`);

          this.$entryDetail(result.$data) } });
  }

  public $entryDetail(data) {

    this.entryChangesT = setTimeout(() => {

    return window.location.href = `${window.location.origin}/general-payment/t/${this.pslug}/entry/${this.eslug}/detail`; } , 3000);

  }

  public $entryChanges(data) {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(['general-payment' , 't' , this.pslug , 'entries']); } , 5000);
  }

  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

  get userRole() : string {

  	return this.aus.userRole;
  }

  get userDepartment() : string {

    return this.aus.userDepartment;
  }

  get userFaculty() : string {

    return this.aus.userFaculty;
  }

  get canUpdateEntry() : boolean {

  	return canUpdate.indexOf(this.userRole) > -1;
  }

  get isFormValid() : boolean {

  	return this.entryForm.valid;
  }

  public removeNotification() : void {

     this.ns.removeNotification();
  }

}
