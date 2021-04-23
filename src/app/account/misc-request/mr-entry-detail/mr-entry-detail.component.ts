import { Component , OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { MiscRequest } from '../misc-request';
import { MiscRequestService } from '../misc-request.service';
import { MiscRequestFormService } from '../mr-form.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { canUpdate } from '../roles';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-mr-entry-detail',

  'templateUrl' : './mr-entry-detail.component.html',

  'styleUrls' : ['./mr-entry-detail.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class MiscRequestEntryDetailComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public acrs : MiscRequestService , 

  						public ns : NotificationService , public acrfs : MiscRequestFormService , public ems : ErrorMessagesService ,

  						private aus : AuthenticationService) {

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public entry : MiscRequest;

  public comments : { [key : string] : any }[] = [];

  public error : { [key : string] : any };

  public isError : boolean = false

  private eslug : string;

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false

  public entryChangesT : any;

  public entryForm : FormGroup;

  public readyToSubmit : boolean;

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.detail.systemType;

    this.title = data.detail.title;

    this.view = data.detail.view;  

    this.viewWord = data.detail.viewWord;

    this.link = data.detail.link;

    this.$link = data.detail.$link;

    this.acrs.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            this.eslug = $e;

            this.isLoading = true;

          	return this.acrs.getEntry($e); })
        )
          .subscribe((result : MiscRequest) => {

  					if (result == null) {

              this.isLoading = false;

              this.isError = true;

              this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

            else if (result != null) {

              this.isLoading = false;

    					this.entry = result;

              this.comments = result.timeline;

    					this.entryForm = this.acrfs.entryUpdateForm(); } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }

  public updateEntry($entry : MiscRequest) : void {

		this.error = null;

    this.isError = false;

		this.isFormProcessing = true;

		this.isFormSubmitted = true;

		this.acrs.updateEntry$(this.eslug , $entry)

			.subscribe((result : General) => {

				if (result == null) { this.isFormSubmitted = false;

					this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`); }

				if (result != null && result.updated == true) {

          this.isLoading = true;

          this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated.`);

					this.$entryChanges($entry.$data);	}	});
  }

  public $entryChanges(data) {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(['misc-request' , 'entries']); } , 5000) 
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
