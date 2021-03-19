import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { GeneralPayment } from '../general-payment';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { GeneralPaymentService } from '../general-payment.service';
import { GeneralPaymentFormService } from '../gp-form.service';
import { authorizationSettings } from './payment-authorization';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gp-entry-create',

  'templateUrl' : './gp-entry-create.component.html',

  'styleUrls' : ['./gp-entry-create.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class GeneralPaymentEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute , public router : Router , public ns : NotificationService , public ems : ErrorMessagesService ,

  						private gps : GeneralPaymentService , private gpfs : GeneralPaymentFormService) {


  }

  public systemType : string;

  public viewWord : string;

  public systemGuideline : string; 

  public paymentRule : General;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public error : General;

  public isError : boolean = false

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false

  public submission : boolean = false;

  public entryForm : FormGroup;

  public entry : General;

  public pslug : string;

  public paymentSession : General;

  public paymentType : number;

  public prev_psession : number;

  public isLoading : boolean = false;

  public paymentSessionCtrl : FormControl = new FormControl();

  ngOnInit() : void {

   let data = this.route.snapshot.data;

     this.systemType = data.create.systemType;

     this.title = data.create.title;

     this.view = data.create.view;

     this.viewWord = data.create.viewWord;

     this.link = data.create.link;

     this.$link = data.create.$link;

     this.systemGuideline = data.create.systemGuideline;

     this.paymentRule = data.create.paymentRule;

    this.gps.$systemType = this.systemType;

    this.gps.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $p = params.get('payment');

            this.pslug = $p;

            this.isLoading = true;

            return this.gps.addEntry($p); })
      )
      .subscribe((result : { [key : string] : any } ) => {

      if (result == null) {

        this.isLoading = false;

        this.isError = true;

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

      else if (result.permitted == true && result.$data != null && result.$data.status != null) {

          this.isLoading = false;

          this.router.navigate(['/general-payment' , this.link , 'entry' , 'detail' , result.$data._id ]); }

      else if (result.permitted == true) {

        this.isLoading = false;

        this.paymentSession = result.$data.payment_session;

        this.paymentType = result.$data.payment_type; } });

  };

  public verifyPaymentSession(evt) : any { let psession : number = 0; 

    if (evt.value == '') { return false; }

    if (evt.value == this.prev_psession) { return false; }

    this.prev_psession = evt.value;

    let confirmPayment : { [key : string] : any } = {'payment_type' : this.paymentType , 'payment_session' : evt.value };

    this.isLoading = true;

    this.gps.checkPayment(this.pslug , confirmPayment)

      .subscribe((value) => { let payload = value.$data;

        if (payload.slug != null) {

          this.isLoading = false;

          this.router.navigate(['general-payment' , 't' , this.pslug , 'entry' , payload.slug , 'detail']) }

        else {

        this.isLoading = false;

        this.entry = payload;

        this.entryForm = this.gpfs.$entryForm();

        this.entryForm.patchValue({'description' : payload.description , 'amount' : payload.amount , 'payment_type' : payload.payment_type , 'payment_session' : payload.payment_session }); } })
  }

  public createEntry(body : { [key : string] : any }) {

		body.amount = this.entry.amount * 100;

		body.email = body.payerEmail;

		body.callback_url = authorizationSettings(this);

  	body.metadata = {

  			'full_name' : body.payerName ,

        'email_address' : body.payerEmail ,

  			'phone_number' : body.payerPhone ,

        'payment_type' : body.payment_type ,

        'payment_session' : body.payment_session };

    this.submission = true;

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.gps.$initializePayment(body)

      .subscribe((result : { [key : string] : any }) => {

        if (result == null) { this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Network error has occured. Payment is only a possiblity when there is Internet connection.`); }

       else if (result != null && result.created == true) {

           this.isLoading = true;

           this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);

          return location.href = result.$data.data.authorization_url; } });
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

  get payerName() : FormControl {

    return this.entryForm.get('payerName') as FormControl;
  }

  get payerEmail() : FormControl {

    return this.entryForm.get('payerEmail') as FormControl;
  }

  get payerPhone() : FormControl {

    return this.entryForm.get('payerPhone') as FormControl;
  }

  get description() : FormControl {

    return this.entryForm.get('description') as FormControl;
  }

  get amt() : FormControl {

    return this.entryForm.get('amt') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }


}
