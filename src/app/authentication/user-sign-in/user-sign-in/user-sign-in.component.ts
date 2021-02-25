import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { FormControl , FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { DataService } from '../../data.service';
import { User , Payload } from '../../user';
import { UserOther } from '../../user-other';
import { General } from '../../general';
import { UserSignInFormService } from '..//user-sign-in-form.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({

  'selector' : 'app-user-sign-in',

  'templateUrl' : './user-sign-in.component.html',

  'styleUrls' : ['./user-sign-in.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService]

})
export class UserSignInComponent implements OnInit {

  constructor(private route : ActivatedRoute , public router : Router , private ds : DataService , public ns : NotificationService ,

              public ems : ErrorMessagesService , public auth : AuthenticationService , private usifs : UserSignInFormService) { 

  }

  public description : string = `All members of the system are required to signin before they can complete or perform any action or task.`;

  public systemType : string;

  public viewWord : string;

  public systemGuideline : string; 

  public title : string;

  public view : string;

  public error : General;

  public isError : boolean = false

  public entryForm : FormGroup;

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false;

  public entryChangesT : any;

  public haveResetForm : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.signIn.systemType;

    this.viewWord = data.signIn.viewWord;

    this.systemGuideline = data.signIn.systemGuideline;

    this.title = data.signIn.title;

    this.view = data.signIn.view;

    this.ds.$systemType = this.systemType;

    this.entryForm = this.usifs.entryForm();

  }

  ngOnDestroy() : void {

  	clearTimeout(this.entryChangesT);
  }

  public confirmAuth(body : User) : void {

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.ds.signIn(body)

      .subscribe((result : Payload) => {

        if (result == null) {

        	this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not logged in.`);

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        	this.isError = true; }

       else if (result != null) { 

       		this.isFormSubmitted = false;

          this.auth.saveToken(result);

          this.auth.saveUserId(result);

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is logged in.`);

          this.entryChanges(result); } });

  }

  public entryChanges(data) : void {

    this.entryChangesT = setTimeout(() => {

      return this.auth.redirectAddress ? this.router.navigate([this.auth.redirectAddress]) : this.router.navigate(['/user/dashboard'])  } , 5000) 
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

  get email_address() : FormControl {

  	return this.entryForm.get('email_address') as FormControl;
  }

  get password() : FormControl {

  	return this.entryForm.get('password') as FormControl
  } 

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }

}
