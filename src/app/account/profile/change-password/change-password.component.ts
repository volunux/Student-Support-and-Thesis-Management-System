import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { User } from '../user';
import { General } from '../general';
import { ProfileService } from '../profile.service';
import { ProfileFormService } from '../profile-form.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-change-password',

  'templateUrl' : './change-password.component.html',

  'styleUrls' : ['./change-password.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class ChangePasswordComponent implements OnInit {

  constructor(private pfs : ProfileFormService , public router : Router , public ps : ProfileService , 

              public ns : NotificationService , private auth : AuthenticationService , private route : ActivatedRoute ,

              public ems : ErrorMessagesService) { 

  }

  public systemType : string = 'User';

  public title : string = 'Change Password';

  public view : string = 'cp';

  public eidx : number;

  public error : General;

  public isError : boolean = false

  public isFormSubmitted : boolean = false

  public isFormProcessing : boolean = false

  public entryForm : FormGroup;

  public entryChangesT : any; 

  public isLoading : boolean = false;

  ngOnInit() : void {

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { 

            this.isLoading = true;

            return this.ps.entryExist(); })
        )

      .subscribe((result : User) => {

          if (result == null) { 

            this.isLoading = false;

            this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

            this.isError = true; }

          else if (result != null) {

            this.isLoading = false;

            this.eidx = result._id;

            this.entryForm = this.pfs.changePassword(); } });

  }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }

  public changePassword(body : { [key : string] : any }) : void {

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.ps.changePassword(body)

      .subscribe((result : General) => {

        if (result == null) { this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} entry is not updated.`); }

         else if (result != null && result.updated == true) { 

          this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} entry is updated.`);

          this.auth.logout();

          this.entryChanges(result); } });
  }

  public entryChanges(data) : void {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigateByUrl('/signin');  } , 5000) 
  }
  
  get password() : FormControl {

    return this.entryForm.get('password') as FormControl;
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
