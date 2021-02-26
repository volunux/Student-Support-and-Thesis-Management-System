import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { GeneralRequestOther } from '../request-others';
import { GeneralRequest } from '../general-request';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { GeneralRequestService } from '../general-request.service';
import { GeneralRequestFormService } from '../gr-form.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { canUpdate } from '../roles';

@Component({

  'selector' : 'app-gr-entry-transfer',

  'templateUrl' : './gr-entry-transfer.component.html',

  'styleUrls' : ['./gr-entry-transfer.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class GeneralRequestEntryTransferComponent implements OnInit {

  constructor(private router : Router , private route : ActivatedRoute , private grs : GeneralRequestService , 

  						public ns : NotificationService , private grfs : GeneralRequestFormService , private ems : ErrorMessagesService ,

  						private aus : AuthenticationService) {

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public entry : GeneralRequest;

  public generalOthers : any;

  public error : { [key : string] : any };

  public isError : boolean = false

	private eslug : string;

  public rslug : string;

  public entryChangesT : any;

	public isFormSubmitted : boolean = false

  public isFormProcessing : boolean = false

  public entryForm : FormGroup;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.transfer.systemType;

    this.title = data.transfer.title;

    this.view = data.transfer.view;

    this.viewWord = data.transfer.viewWord;

    this.link = data.transfer.link;

    this.grs.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { 

            let $r = params.get('request');

            let $e = params.get('entry');

            this.eslug = $e;

            this.rslug = $r;

          	return this.grs.transferEntry($r , $e); })
        )
		      .subscribe((result : { [key : string] : any }) => {

							if (result == null) { this.isError = true;

                this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

              else if (result != null && result.permitted == true) {

							this.entry = result.$data.Entry;

							this.generalOthers = result.$data != null ? new GeneralRequestOther(result.$data) : {};

							this.entryForm = this.grfs.entryTransferForm();

		          this.grfs.createPermanent(result.$data.Unit , this.entryForm); } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }

  public updateEntry(body : { [key : string] : any }) : void {

		this.error = null;

    this.isError = false;

		this.isFormProcessing = true;

		this.isFormSubmitted = true;

		this.grs.transferEntry$(this.rslug , this.eslug , body)

			.subscribe((result : General) => {

				if (result == null) { this.isFormSubmitted = false;

					this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`); }

				else if (result != null && result.updated) { this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated and transferred.`);

					return this.entryChanges(result.$data); } });
  }

  public entryChanges(data) {

   this.entryChangesT = setTimeout(() => {

      return this.router.navigate(['general-request' , 't' , this.rslug , 'entries']);  } , 5000) 
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

  get isFormValid() : boolean {

  	return this.entryForm.valid;
  }

  get canUpdateEntry() : boolean {

  	return canUpdate.indexOf(this.userRole) > -1;
  }

  get text() : FormControl {

  	return this.entryForm.get('text') as FormControl;
  }

  get unit() : FormControl {

  	return this.entryForm.get('unit') as FormControl;
  }

   public removeNotification() : void {

     this.ns.removeNotification();
   }

}
