import { Component , OnInit , ViewEncapsulation } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { RefundLetterService } from '../refund-letter.service';
import { RefundLetterFormService } from '../refund-letter-form.service';
import { switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { RefundLetter } from '../refund-letter';
import { General } from '../general';

import "../../../../assets/js/froala_editor.min.js";
import "../../../../assets/js/plugins/align.min.js";
import "../../../../assets/js/plugins/colors.min.js";
import "../../../../assets/js/plugins/fullscreen.min.js";
import "../../../../assets/js/plugins/font_family.min.js";
import "../../../../assets/js/plugins/font_size.min.js";
import "../../../../assets/js/plugins/line_breaker.min.js";
import "../../../../assets/js/plugins/line_height.min.js";
import "../../../../assets/js/plugins/print.min.js";
import "../../../../assets/js/plugins/char_counter.min.js";
import "../../../../assets/js/plugins/word_paste.min.js";
import "../../../../assets/js/plugins/lists.min.js";
import "../../../../assets/js/plugins/paragraph_style.min.js";
import "../../../../assets/js/plugins/paragraph_format.min.js";
import "../../../../assets/js/plugins/quote.min.js";


@Component({

  'selector' : 'app-refund-letter-entry-create',

  'templateUrl' : './refund-letter-entry-create.component.html',

  'styleUrls' : ['./refund-letter-entry-create.component.css'] ,

  'encapsulation' : ViewEncapsulation.None

})

export class RefundLetterEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private rfls : RefundLetterService , private rflfs : RefundLetterFormService ,

  					 	public ns : NotificationService , public ems : ErrorMessagesService , private aus : AuthenticationService) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public entry : RefundLetter;

  public error : { [key : string] : any };

  public isError : boolean = false

  private eslug : string;

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false;

  public entryForm : FormGroup;

  public isOtherColAvailable : boolean = false;

  public currentStage : number;

  public entryChangesT : any;

  public eother : { [key : string] : any };

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.create.systemType;

    this.title = data.create.title;

    this.view = data.create.view;

    this.viewWord = data.create.viewWord;

    this.link = data.create.link;

    this.rfls.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

          	return this.rfls.getEntry($e); })
        )
          .subscribe((result : RefundLetter) => {

    					if (result == null) { this.isError = true;

                return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

    					this.entry = result;

    					this.eslug = this.entry.slug;

              this.entryForm = this.rflfs.entryUpdateForm();

              if (this.entry.stage != null && this.entry.stage == 3) {

              this.currentStage = 4; 

					    this.entryForm.patchValue({'stage' : this.currentStage , 'text' : 'Content of the Letter' , 'status' : this.entry.other_status_id});

					    this.entryForm.addControl('main_body' , new FormControl('' , {'validators' : this.rflfs.mainBodyV }));

					    this.entryForm.updateValueAndValidity(); } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }

  public updateEntry(body : RefundLetter) : void {

    this.isError = false;

		this.error = null;

		this.isFormProcessing = true;

		this.isFormSubmitted = true;

		this.rfls.$updateEntry(this.eslug , body)

			.subscribe((result : General) => {

				if (result == null) { this.isFormSubmitted = false;

					this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not updated.`); }

				if (result != null && result.updated == true) { this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated.`);

					this.entryChanges(result.$data); } });
  }

  public entryChanges(data) {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate([this.link , 'entries']);  } , 5000) 
  }

  get main_body() : FormControl {

    return this.entryForm.get('main_body') as FormControl;
  }

  get canUpdateEntry3() : boolean {

    return ['student' , 'departmentPresident' , 'facultyPresident'].indexOf(this.userRole) > -1; 
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
