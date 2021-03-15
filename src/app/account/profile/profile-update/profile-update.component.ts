import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { FormBuilder , FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { User } from '../user';
import { UserOther } from '../user-other';
import { General } from '../general';
import { ProfileService } from '../profile.service';
import { ProfileFormService } from '../profile-form.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-profile-update',

  'templateUrl' : './profile-update.component.html',

  'styleUrls' : ['./profile-update.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class ProfileUpdateComponent implements OnInit {

  constructor(public router : Router , public ps : ProfileService , public ns : NotificationService , private route : ActivatedRoute ,

              public ems : ErrorMessagesService , public pfs : ProfileFormService ) {


  }

  public systemType : string = 'Profile';

  public entryOthers : UserOther = null;

	public title : string = `${this.systemType} Update`;

	public entry : User;

	public isFormModified : boolean = false;

	public formMessage : string = 'Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.';

	private eidx : number;

	public error : General;

  public isError : boolean = false

  public view : string;

  public isFormProcessing : boolean = false

	public isFormSubmitted : boolean = false

  public entryForm : FormGroup;

  public entryChangesT : any;

  public isLoading : boolean = false;

  ngOnInit() : void {

    this.entryForm = this.pfs.profileUpdate();

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            this.isLoading = true;

            return this.ps.profileUpdate(); })
        )

      .subscribe((result : { [key : string] : any}) => {

					if (result == null) { 

            this.isLoading = false;

            this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message); 

            this.isError = true; }

          else if (result != null) {

            this.isLoading = false;

  					this.entry = result.User;

  					this.eidx = this.entry._id;

            this.entryOthers = new UserOther(result);

            this.pfs.createPermanent(result , this.entryForm);

  					this.entryForm.patchValue(this.entry); } });
	}

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }
	
	public updateEntry(body : User) : void {

		this.error = null;

    this.isError = false;

		this.isFormProcessing = true;

		for (let chrs in this.entry) { 

				if((this.entry[chrs] != body[chrs] && (body[chrs] !== null && body[chrs] !== undefined))) { 

					this.isFormModified = true;

					break;	}	}

		if (this.isFormModified == true) {

			this.isFormSubmitted = true;

  		this.ps.profileUpdate$(this.eidx , body)

			.subscribe((result : { [key : string] : any }) => {

				if (result == null) {

          this.isFormSubmitted = false;

					this.isFormProcessing = false;

					this.isFormModified = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is unsuccessful and profile is not updated.'); }

				if (result != null && result.updated == true) {

          this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification('Operation is successful and profile is updated.');

					this.$entryChanges(result.$data);	}	});	}

		else { 

			this.isFormProcessing = false; }

	}

  public $entryChanges(data) {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(['account' , 'profile']);  } , 5000) 
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

  get first_name() : FormControl {

      return this.entryForm.get('first_name') as FormControl;
  }

  get last_name() : FormControl {

      return this.entryForm.get('last_name') as FormControl;
  }

  get about() : FormControl {

      return this.entryForm.get('about') as FormControl;
  }

  get country() : FormControl {

      return this.entryForm.get('country') as FormControl;
  }

  get level() : FormControl {

      return this.entryForm.get('level') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }

}
