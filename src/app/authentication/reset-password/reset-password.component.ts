import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { User } from '../user';
import { General } from '../general';
import { DataService } from '../data.service';
import { AuthenticationService } from '../authentication.service';
import { AuthenticationFormService } from '../authentication-form.service';
import { ErrorMessagesService1 } from '../error-messages.service1';
import { NotificationService } from '../../shared/services/notification.service';

@Component({

  'selector' : 'app-reset-password',

  'templateUrl' : './reset-password.component.html',

  'styleUrls' : ['./reset-password.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService1]

})
export class ResetPasswordComponent implements OnInit {


  constructor(private afs : AuthenticationFormService , private router : Router , private ds : DataService , private auth : AuthenticationService ,

              private ns : NotificationService , private route : ActivatedRoute , private ems : ErrorMessagesService1) { 

  }

  public systemType : string;

  public viewWord : string;

  public systemGuideline : string; 

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public noEdit : boolean;

  public error : General;

  public isError : boolean = false

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false

  public passwordToken : string;

  public changesSuccess : boolean;

  public entryForm : FormGroup;

  public entryChangesT : any;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.resetPassword.systemType;

    this.viewWord = data.resetPassword.viewWord;

    this.systemGuideline = data.resetPassword.systemGuideline;

    this.title = data.resetPassword.title;

    this.view = data.resetPassword.view;

    this.link = data.resetPassword.link;

    this.$link = data.resetPassword.$link;

    this.noEdit = data.resetPassword.noEdit;

    this.ds.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

          let $e = params.get('token');

          this.passwordToken = $e;

           return this.ds.resetPassword($e); }) )

      .subscribe((result : General) => {

          if (result == null) { 

            this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

            this.isError = true; }

          else if (result != null) {

            this.entryForm = this.afs.resetPassword(); } });

  }

  public $resetPassword(body : General) {

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.ds.resetPassword$(this.passwordToken , body)

      .subscribe((result : General) => {

        if (result == null) {

          this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not logged in.`);

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

          this.isError = true; }

         else if (result != null) { this.isFormSubmitted = false;

          this.changesSuccess = true;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} entry is updated.`);

          this.auth.logout();

          this.entryChanges(result); } });
  }

  public entryChanges(data) : void {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigateByUrl('/');  } , 15000) 
  }
  
  get new_password() : FormControl {

  		return this.entryForm.get('new_password') as FormControl;
  }

  get confirm_password() : FormControl {

  		return this.entryForm.get('confirm_password') as FormControl;
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
