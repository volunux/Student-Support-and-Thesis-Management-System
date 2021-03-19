import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormControl , FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { User } from '../user';
import { General } from '../general';
import { ProfileService } from '../profile.service';
import { ProfileFormService } from '../profile-form.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-profile-reactivate',

  'templateUrl' : './profile-reactivate.component.html',

  'styleUrls' : ['./profile-reactivate.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class ProfileReactivateComponent implements OnInit {

  constructor(private pfs : ProfileFormService , public router : Router , public ps : ProfileService , 

              public ns : NotificationService , private route : ActivatedRoute , public ems : ErrorMessagesService) { 

  }

  public systemType : string = 'Profile';

  public title : string = `${this.systemType} Reactivate`;

  public entry : User;

  public error : General;

  public isError : boolean = false

  public view : string = 'urp';

  public isFormSubmitted : boolean = false

  public isFormProcessing : boolean = false

  public entryForm : FormGroup;

  public entryChangesT : any;

  public isLoading : boolean = false;

  ngOnInit(): void {

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            this.isLoading = true;

            return this.ps.reactivateProfile(); })
        
        )

      .subscribe((result : User) => {

          if (result == null) {

            this.isLoading = false;

            this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

            this.isError = true; }

          else if (result != null) {

            this.isLoading = false;

            this.entryForm = this.pfs.statusProfile();

            this.entry = result;

            this.entryForm.patchValue(this.entry); } });
  }

  public reactivateEntry() : void {

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.ps.reactivateProfile$(this.entry)
      
      .subscribe((result : General) => { 

        if (result == null) {

          this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not reactivated.`); }

         else if (result != null && result.updated == true) {

          this.isLoading = true;

          this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is reactivated.`);

          this.entryChanges({}); } });

  }

  public entryChanges(data) {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(['account' , 'profile' ]);  } , 5000) 
  }

  get email_address() : FormControl {

    return this.entryForm.get('email_address') as FormControl;
  }

  get identity_number() : FormControl {

    return this.entryForm.get('identity_number') as FormControl;
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