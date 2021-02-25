import { Component , OnInit } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { User } from '../user';
import { General , emailAddress } from '../general';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';
import { emailAddressValidator } from '../../shared/services/form-validators.service';
import { fadeAnimation } from '../../animations';
import { ErrorMessagesService1 } from '../error-messages.service1';
import { NotificationService } from '../../shared/services/notification.service';

@Component({

  'selector' : 'app-forgot-password',

  'templateUrl' : './forgot-password.component.html',

  'styleUrls' : ['./forgot-password.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService1] ,

  'animations' : [fadeAnimation]

})

export class ForgotPasswordComponent implements OnInit {

  constructor(private router : Router , private route : ActivatedRoute , private ds : DataService , private auth : AuthenticationService ,

              private fb : FormBuilder , private ns : NotificationService , private ems : ErrorMessagesService1) { 

  }

  public description : string = `All members of the system are will be able to recover their account if they have an email address registered in the system.`;

  public systemType : string;

  public viewWord : string;

  public systemGuideline : string; 

  public title : string;

  public view : string;

  public link : string;

  public error : General;

  public isError : boolean = false

  public isFormSubmitted : boolean = false

  public isFormProcessing : boolean = false

  public changesSuccess : boolean;

  public entryForm : FormGroup;

  public entryChangesT : any;

  ngOnInit() : void {

    this.entryForm = this.fb.group({ 

      'email_address' : ['' , {'validators' : [Validators.required , Validators.minLength(7) , Validators.maxLength(50) , emailAddressValidator(emailAddress) ] } ] });

    let data = this.route.snapshot.data;

    this.systemType = data.forgotPassword.systemType;

    this.viewWord = data.forgotPassword.viewWord;

    this.systemGuideline = data.forgotPassword.systemGuideline;

    this.title = data.forgotPassword.title;

    this.view = data.forgotPassword.view;

    this.link = data.forgotPassword.link;

    this.ds.$systemType = this.systemType;
  
  }
 
  public confirmEntry(body : General) : any {

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.ds.forgotPassword$(body)

      .subscribe((result : General) => {

        if (result == null) { 

          this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`);

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

          this.isError = true; }

         else if (result != null) {

           this.isFormSubmitted = false;

           this.changesSuccess = true;

           this.ns.setNotificationStatus(true);

           this.ns.addNotification(`Operation is successful and ${this.systemType} entry is updated.`);

           this.entryChanges(result); } });

  }

  public entryChanges(data) : void {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigateByUrl('/'); } , 30000) 
  }

 get email_address() : FormControl {

    return this.entryForm.get('email_address') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
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
