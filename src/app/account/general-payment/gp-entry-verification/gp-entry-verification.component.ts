import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , Router , Params } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GeneralPayment } from '../general-payment';
import { General } from '../general';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { GeneralPaymentService } from '../general-payment.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gp-entry-verification',

  'templateUrl' : './gp-entry-verification.component.html',

  'styleUrls' : ['./gp-entry-verification.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService ] ,

  'animations' : [fadeAnimation]

})

export class GeneralPaymentEntryVerificationComponent implements OnInit {

  constructor(public router : Router , public ns : NotificationService , public ems : ErrorMessagesService ,

  						private route : ActivatedRoute , private gps: GeneralPaymentService) {

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public error : General;

  public isError : boolean = false

  public pslug : string;

  public entryChangesT : any;

  public isLoading : boolean = false;

  ngOnInit() : void {

    this.gps.$systemType = this.systemType;

    this.gps.$sa = this.$link;

    this.route.queryParams

      .pipe(

          switchMap((params : Params) => {

          	let $e = params.reference;

          	let $ps = this.route.snapshot.paramMap;

          	this.pslug = $ps.get('payment');

            this.isLoading = true;

          	return this.gps.$verifyPayment($e); })
        )
          .subscribe((result : General) => {

  					if (result == null) { 

              this.isLoading = false;

  						this.isError = true;

  						this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

             else if (result != null && result.verified == true) {

               this.isLoading = false;
        
              this.ns.setNotificationStatus(true);

              this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);

              this.entryChanges(result.$data); } });
  }

  ngOnDestroy() : void {

  	clearTimeout(this.entryChangesT);
  }

  public entryChanges(data) {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(data && data._id ? 

        ['general-payment' , 't' , this.pslug , 'entry' , data.slug , 'detail'] : ['general-payment' , 't' , this.pslug] , {'replaceUrl' : true} ); } 

      , 5000); 
  }

  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

  public removeNotification() : void {

     this.ns.removeNotification();
   }


}
