import { Component , OnInit , Inject } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { FormBuilder , FormGroup , FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { Api , Api_Token } from '../../../../../configuration';
import { User } from '../user';
import { General } from '../general';
import { UserService } from '../user.service';
import { UserOther } from '../user-other';
import { nullRemover , checkFormChanges } from '../../../../../shared/services/others';
import { UserAccountFormService } from '../../../../../shared/user-account/user-account-form.service'; 
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { fadeAnimation } from '../../../../../animations';

@Component({

	'selector' : 'app-user-update',
	
	'templateUrl' : './user-update.component.html',
	
	'styleUrls' : ['./user-update.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class UserUpdateComponent extends UserAccountFormService implements OnInit {

  constructor(public router : Router , public us : UserService , public ns : NotificationService , private route : ActivatedRoute ,

              public ufs : UserAccountFormService , public ems : ErrorMessagesService , public auth : AuthenticationService , public fb : FormBuilder ,

              public http : HttpClient , @Inject(Api_Token) public apiConfig : Api) {  super(auth , fb , http , apiConfig);  }

  public systemType : string;

	public title : string;

	public view : string;

	public viewWord : string;

	public link : string;

	public link2 : boolean;

	public $link : string;

	public controlFilters : string[];

	public noEdit : boolean;

  public generalOthers : UserOther = null;

	public entryForm : FormGroup;

	public entry : User;

	public isFormModified : boolean = false;

	public formMessage : string = 'Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.';

	private eslug : string;

	public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false;

	public error : General;

	public isError : boolean = false;

	public entryChangesT : any;

	public isLoading : boolean = false;


	ngOnInit() : void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.update.systemType;

  	this.title = data.update.title;

  	this.view = data.update.view;

  	this.viewWord = data.update.viewWord;

  	this.link = data.update.link;

  	this.link2 = data.update.link2;

  	this.$link = data.update.$link;

  	this.controlFilters = data.update.controlFilters;

  	this.noEdit = data.update.noEdit;

  	this.us.$systemType = this.systemType;

  	this.us.$sa = this.$link;

  	this.removeControls(this.controlFilters);

		this.route.paramMap

      .pipe(

        switchMap((params : ParamMap) => {

          let $e = params.get('entry');

					this.eslug = $e;

					this.isLoading = true;

          return this.us.updateEntry($e , this.link2); })
        )
				.subscribe((result : General) => { 

					if (result == null) {

						this.isLoading = false;

						this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

						this.isError = true; }

					else if (result != null) {

					this.isLoading = false;

					this.entry = nullRemover(result.Entry);

         	this.generalOthers = new UserOther(result);

          this.createPermanent(result);

					this.entryForm.patchValue(this.entry); } }); 
	}

	ngOnDestroy() : void {

		clearTimeout(this.entryChangesT);
	}

	public confirmChanges(entry : General , body : General) : boolean {

		checkFormChanges(entry , body , this);

    return this.isFormModified;
	}

	public updateEntry(body : User) : void {

		this.error = null;

		this.isError = false;

    this.isFormProcessing = true;

    this.confirmChanges(this.entry , body);

		if (this.isFormModified == true) {

			this.isFormSubmitted = true;

		this.us.updateEntry$(this.eslug , body)

			.subscribe((result : General) => {

				if (result == null) {

					this.isFormSubmitted = false;

					this.isFormProcessing = false;

					this.isFormModified = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`);

					this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message);

					this.isError = true; }

				if (result != null && result.updated == true) {

					this.isLoading = true;

					this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is updated.`);

					this.entryChanges(result.$data); } }); }

		else { 

			this.isFormProcessing = false; }

	}

  public entryChanges(data) : void {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(['system' , 'internal' , this.link , 'entries']);  } , 5000) 
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
