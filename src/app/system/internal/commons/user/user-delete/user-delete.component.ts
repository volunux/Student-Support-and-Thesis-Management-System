import { Component , OnInit , Inject } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { FormBuilder , FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Api , Api_Token } from '../../../../../configuration';
import { User , User$ } from '../user';
import { General } from '../general';
import { UserService } from '../user.service';
import { UserOther } from '../user-other';
import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { UserAccountFormService } from '../../../../../shared/user-account/user-account-form.service'; 
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-user-delete',
  
  'templateUrl' : './user-delete.component.html',
  
  'styleUrls' : ['./user-delete.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService] ,

  'animations' : [fadeAnimation]

})

export class UserDeleteComponent extends UserAccountFormService implements OnInit {

  constructor(public router : Router , public us : UserService , public ns : NotificationService , private route : ActivatedRoute ,

              public ufs : UserAccountFormService , public ems : ErrorMessagesService , public auth : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api) {  super(auth , fb , http , apiConfig);  }

  public systemType : string;

  public viewWord : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public controlFilters : string[];

  public asyncValidators : string[];

  public noEdit : boolean;

  private eslug : string;

  public error : General;

  public isError : boolean = false;

  public entry : User$;

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false

  public submission : boolean = false;

  public entryChangesT : any;

  public isLoading : boolean = false;

  ngOnInit(): void {

    let data = this.route.snapshot.data;

    this.systemType = data.delete.systemType;

    this.viewWord = data.delete.viewWord;

    this.systemGuideline = data.delete.systemGuideline;

    this.title = data.delete.title;

    this.view = data.delete.view;

    this.link = data.delete.link;

    this.$link = data.delete.$link;

    this.controlFilters = data.delete.controlFilters;

    this.noEdit = data.delete.noEdit;

    this.asyncValidators = data.delete.asyncValidators;

    this.us.$systemType = this.systemType;

    this.us.$sa = this.$link;

    this.removeControls(this.controlFilters);

    this.removeAsyncValidators(this.asyncValidators);

    this.route.paramMap

      .pipe(

        switchMap((params : ParamMap) => {

          let $e = params.get('entry');

          this.isLoading = true;

          return this.us.deleteEntry($e); })
        )
        .subscribe((result : User) => { 

          if (result == null) {

            this.isLoading = false;

            this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

            this.isError = true; }

          else if (result != null) {

            this.isLoading = false;

            this.eslug = result.slug;

            this.entry = result;  

            this.entryForm.patchValue(this.entry); } }); 

  }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }

  public deleteEntry(entry : User) : boolean {

    let isConfirmed = confirm('Are you sure you want to proceed with this action?');

    if (isConfirmed) {

   this.submission = true;

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.us.deleteEntry$(this.eslug)

      .subscribe((result : General) => {

        if (result == null) {

          this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not deleted.`); }

       else if (result != null && result.deleted == true) {

         this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is deleted.`);

          this.entryChanges(result); } }); }

     else { return false };
  }

  public entryChanges(data) {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(['system', 'internal' , this.link , 'entries']);  } , 5000) 
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
