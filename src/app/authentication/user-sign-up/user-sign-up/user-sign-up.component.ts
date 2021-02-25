import { Component , OnInit , Injectable , Inject } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { FormControl , FormGroup , FormBuilder } from '@angular/forms';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../../authentication.service';
import { Api , Api_Token } from '../../../configuration';
import { DataService } from '../../data.service';
import { Payload , User , UserFormModel } from '../../user';
import { UserOther } from '../../user-other';
import { General } from '../../general';
import { AuthenticationFormService } from '../../authentication-form.service';
import { UserAccountFormService } from '../../../shared/user-account/user-account-form.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({

  'selector' : 'app-user-sign-up',

  'templateUrl' : './user-sign-up.component.html',

  'styleUrls' : ['./user-sign-up.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService]
})

export class UserSignUpComponent extends UserAccountFormService implements OnInit {

  constructor(public router : Router , private ds : DataService , public ns : NotificationService , private route : ActivatedRoute ,

              public ems : ErrorMessagesService , public auth : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api ) { super(auth , fb , http , apiConfig); }

  public systemType : string;

  public viewWord : string;

  public systemGuideline : string; 

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public controlFilters : string[];

  public noEdit : boolean;

  public generalOthers : UserOther = null;

  public error : General;

  public isError : boolean = false

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false

  public entryChangesT : any;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.signUp.systemType;

    this.viewWord = data.signUp.viewWord;

    this.systemGuideline = data.signUp.systemGuideline;

    this.title = data.signUp.title;

    this.view = data.signUp.view;

    this.link = data.signUp.link;

    this.$link = data.signUp.$link;

    this.controlFilters = data.signUp.controlFilters;

    this.noEdit = data.signUp.noEdit;

    this.ds.$systemType = this.systemType;

      this.ds.addUser()

    .subscribe((result : General) => {

      if (result == null) {

      	this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);

      	this.isError = true; }

      if (result != null) { 

        let data = result;

        this.generalOthers = new UserOther(data);

        this.removeControls(this.controlFilters);

        this.createPermanent(data); } });

  };

  ngOnDestroy() : void {

  	clearTimeout(this.entryChangesT);
  }

  public addEntry(body : User) {

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.ds.addUser$(body)

      .subscribe((result : Payload) => {

        if (result == null) {

        	this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`);

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        	this.isError = true; }

       else if (result != null) {

          this.auth.saveToken(result);

          this.auth.saveUserId(result);

       		this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);

          this.entryChanges(result); } });
  }

  public entryChanges(data) : void {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(data != null ? 

       ['user' , 'dashboard'] : ['system' , 'internal' , this.link , 'entries']); } 

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
