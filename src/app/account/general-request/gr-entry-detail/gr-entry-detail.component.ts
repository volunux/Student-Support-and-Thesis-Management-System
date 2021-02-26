import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { GeneralRequest } from '../general-request';
import { GeneralRequestService } from '../general-request.service';
import { GeneralRequestFormService } from '../gr-form.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { canUpdate } from '../roles';

@Component({

  'selector' : 'app-gr-entry-detail',

  'templateUrl' : './gr-entry-detail.component.html',

  'styleUrls' : ['./gr-entry-detail.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class GeneralRequestEntryDetailComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public grs : GeneralRequestService , 

  						public ns : NotificationService , public grfs : GeneralRequestFormService , public ems : ErrorMessagesService ,

  						private aus : AuthenticationService) {

  }

  public systemType : string;

  public viewWord : string;

  public generateCred : string;

  public title : string;

  public view : string;

  public link : string;

  public entry : GeneralRequest;

  public error : { [key : string] : any };

  public isError : boolean = false

  private eslug : string;

  private rslug : string;

  public entryStatuses : { [key : string] : any }[];

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false

  public entryChangesT : any;

  public entryForm : FormGroup;

  public readyToSubmit : boolean;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.detail.systemType;

    this.title = data.detail.title;

    this.view = data.detail.view;  

    this.viewWord = data.detail.viewWord;

    this.link = data.detail.link;

    this.generateCred = data.detail.generateCred;

    this.grs.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            let $r = params.get('request');

            this.rslug = $r;

            this.eslug = $e;

          	return this.grs.getEntry($r , $e); })
        )
          .subscribe((result : GeneralRequest) => {

  					if (result == null) { 

              this.isError = true;

              this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

            else if (result != null) {

    					this.entry = result;

    					this.entryForm = this.grfs.entryUpdateForm(); } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }

  public updateEntry($entry : GeneralRequest) : void {

		this.error = null;

    this.isError = false;

		this.isFormProcessing = true;

		this.isFormSubmitted = true;

		this.grs.updateEntry$(this.rslug , this.eslug , $entry)

			.subscribe((result : General) => {

				if (result == null) { this.isFormSubmitted = false;

					this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`); }

				if (result != null && result.updated == true) { this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated.`);

					this.$entryChanges($entry.$data);	}	});
  }

  public $entryChanges(data) {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(['general-request' , 't' , this.rslug , 'entries']); } , 5000) 
  }

  public $confirmEntryOnReview(result : { [key : string] : any }) : void {

   this.entry.status = result.status;

  }

  public openSubBtn(toSubmit : boolean) {

    if (toSubmit == true) {

      this.readyToSubmit = true; }

  }

  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

  get userRole() : string {

  	return this.aus.userRole;
  }

  get canUpdateEntry() : boolean {

  	return canUpdate.indexOf(this.userRole) > -1;
  }

  get isFormValid() : boolean {

  	return this.entryForm.valid;
  }

  public removeNotification() : void {

     this.ns.removeNotification();
  }

}
