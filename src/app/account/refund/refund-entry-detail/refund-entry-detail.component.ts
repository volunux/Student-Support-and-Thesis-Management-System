import { Component , Input , OnInit , OnDestroy } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { Refund } from '../refund';
import { RefundService } from '../refund.service';
import { RefundFormService } from '../refund-form.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { canUpdate } from '../roles';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-refund-entry-detail',

  'templateUrl' : './refund-entry-detail.component.html',

  'styleUrls' : ['./refund-entry-detail.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class RefundEntryDetailComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public rfs : RefundService , 

  						public ns : NotificationService , public rffs : RefundFormService , public ems : ErrorMessagesService ,

  						private aus : AuthenticationService) {

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  public entry : Refund;

  public error : { [key : string] : any };

  public isError : boolean = false;

  private eslug : string;

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false;

  public entryChangesT : any;

  public entryForm : FormGroup;

  public isOtherColAvailable : boolean = false;

  public currentStage : number;

  public eother : { [key : string] : any };

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.detail.systemType;

    this.title = data.detail.title;

    this.view = data.detail.view;

    this.viewWord = data.detail.viewWord;

    this.link = data.detail.link;

    this.$link = data.detail.$link;

    this.rfs.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            this.eslug = $e;

            this.isLoading = true;

          	return this.rfs.getEntry($e); })
        )
          .subscribe((result : Refund) => {

    					if (result == null) {

                this.isLoading = false;

                this.isError = true;

                this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

              else if (result != null) {

              this.isLoading = false;

    					this.entry = result;

              this.entryForm = this.rffs.entryUpdateForm();

              if (this.entry.stage != null && this.entry.stage._id == 1) {

                this.currentStage = 2; }

              else if (this.entry.stage != null && this.entry.stage._id == 2) {

                this.currentStage = 3; }

              else if (this.entry.stage != null && this.entry.stage._id == 4) {

                  this.currentStage = 5; }

              else if (this.entry.stage != null && this.entry.stage._id == 5) {

                  this.currentStage = 6; } } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }

  public updateEntry(body : { [key : string] : any }) : void {

    this.isError = false;

    this.isError = false;

		this.error = null;

		this.isFormProcessing = true;

		this.isFormSubmitted = true;

		this.rfs.updateEntry$(this.eslug , body)

			.subscribe((result : General) => {

				if (result == null) { this.isFormSubmitted = false;

					this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`);

          this.isError = true;

					this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

				else if (result != null && result.updated == true) {

          this.isLoading = true;

          this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated.`);

					return this.entryChanges(result.$data); } });
  }

  public entryChanges(data) : void {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate([this.link , 'entries']); } , 5000) 
  }

  public $confirmEntryOnReview(result : { [key : string] : any }) : void {

		if (this.entry != null) {

			this.entry.status = result.status;

      this.entry.stage = {'_id' : 1};

      this.currentStage = 2; }
  }

  public otherCol() : void {

    this.isLoading = true;

    this.rfs.status()

      .subscribe((result : {[key : string] : any}) => {

        if (result == null) {

          this.isLoading = false; }

        if (result != null) {

          this.isLoading = false;

          this.isOtherColAvailable = true;

          this.eother = result; } });

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

  get canUpdateEntry2() : boolean {

    return ['bursar'].indexOf(this.userRole) > -1; 
  }

  get canUpdateEntry4() : boolean {

    return ['hod' , 'dean'].indexOf(this.userRole) > -1; 
  }

  get canUpdateEntry5() : boolean {

    return ['bursar'].indexOf(this.userRole) > -1; 
  }

  get userId() : string {

    return this.aus.userId;
  }

  get isFormValid() : boolean {

  	return this.entryForm.valid;
  }

  public removeNotification() : void {

    this.ns.removeNotification();
  }


}
