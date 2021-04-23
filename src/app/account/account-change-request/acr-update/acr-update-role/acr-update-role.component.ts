import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { AcrUpdateService } from '../acr-update.service';
import { AcrUpdateFormService } from '../acr-update-form.service';
import { canUpdate } from '../../roles';
import { GeneralOther } from '../general-other';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../shared/services/notification.service';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-acr-update-role',

  'templateUrl' : './acr-update-role.component.html',

  'styleUrls' : ['./acr-update-role.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService] ,

  'animations' : [fadeAnimation]

})

export class AcrUpdateRoleComponent implements OnInit {

  constructor(private route : ActivatedRoute , private acrus : AcrUpdateService , private acrufs : AcrUpdateFormService , private aus : AuthenticationService ,

              private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  @Input('system-type') public systemType : string;

  @Input('system-guideline') public systemGuideline : string;

  @Input() public title : string;

  @Input() public view : string;

  @Input() public link : string;


  public isError : boolean = false;

  public error : { [key : string] : any };


  @Input() public entry : { [key : string] : any };

  public entry2 : { [key : string] : any };

  public eidx : string;

  public entryForm : FormGroup;

  public isFormProcessing : boolean = false;

  public isFormSubmitted : boolean = false;

  public isLoading : boolean = false;

  public noEdit : boolean = true;

  public generalOthers : any = null;


  ngOnInit() : void {

  	this.entryForm = this.acrufs.updateRole();

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            this.isLoading = true;

            return this.acrus.updateRole(this.entry.slug); })
        )

      .subscribe((result : { [key : string] : any}) => {

          if (result == null) { 

            this.isLoading = false;

            this.error = Object.assign({'resource' : 'User Entry'} , this.ems.message); 

            this.isError = true; }

          else if (result != null) {

            this.isLoading = false;

            this.entry2 = result.Entry;

            this.eidx = this.entry2._id;

            this.generalOthers = new GeneralOther(result);

            this.entryForm.patchValue({'role' : this.entry2.role , 'new_role' : this.entry2.previous_role }); } });
  
  }

  public updateEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;
    
    this.isFormSubmitted = true;

    this.isLoading = true;

      this.acrus.updateRole$(this.entry2.slug , body)

      .subscribe((result : { [key : string] : any }) => {

        if (result == null) {

          this.isLoading = false;

          this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`); }

        if (result != null && result.updated == true) {

          this.isLoading = false;

          this.isFormProcessing = false;

          this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is updated.`); } });  

  }

  get role() : FormControl {

  	return this.entryForm.get('role') as FormControl;
  }

  get new_role() : FormControl {

  	return this.entryForm.get('new_role') as FormControl;
  }

  get userRole() : string {

  	return this.aus.userRole;
  }

  get isFormValid() : boolean {

  	return this.entryForm.valid;
  }

  get canUpdateEntry() : boolean {

  	return canUpdate.indexOf(this.userRole) > -1;
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
