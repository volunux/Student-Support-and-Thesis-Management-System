import { Component , OnInit , ViewEncapsulation } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MiscRequest } from '../../misc-request';

import { AcrSendMailService } from '../mr-send-mail.service';
import { AcrSendMailFormService } from '../mr-send-mail-form.service';
import { canUpdate } from '../../roles';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../shared/services/notification.service';
import { fadeAnimation } from '../../../../animations';

import "../../../../../assets/js/froala_editor.min.js";
import "../../../../../assets/js/plugins/align.min.js";
import "../../../../../assets/js/plugins/colors.min.js";
import "../../../../../assets/js/plugins/entities.min.js";
import "../../../../../assets/js/plugins/fullscreen.min.js";
import "../../../../../assets/js/plugins/font_family.min.js";
import "../../../../../assets/js/plugins/font_size.min.js";
import "../../../../../assets/js/plugins/line_breaker.min.js";
import "../../../../../assets/js/plugins/line_height.min.js";
import "../../../../../assets/js/plugins/inline_style.min.js";
import "../../../../../assets/js/plugins/inline_class.min.js";
import "../../../../../assets/js/plugins/code_view.min.js";
import "../../../../../assets/js/plugins/forms.min.js";
import "../../../../../assets/js/plugins/special_characters.min.js";
import "../../../../../assets/js/plugins/save.min.js";
import "../../../../../assets/js/plugins/print.min.js";
import "../../../../../assets/js/plugins/char_counter.min.js";
import "../../../../../assets/js/plugins/word_paste.min.js";
import "../../../../../assets/js/plugins/lists.min.js";
import "../../../../../assets/js/plugins/paragraph_style.min.js";
import "../../../../../assets/js/plugins/paragraph_format.min.js";
import "../../../../../assets/js/plugins/quote.min.js";

@Component({

  'selector' : 'app-mr-send-mail',

  'templateUrl' : './mr-send-mail.component.html',

  'styleUrls' : ['./mr-send-mail.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService] ,

  'encapsulation' : ViewEncapsulation.None ,

  'animations' : [fadeAnimation]

})

export class AcrSendMailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private acrus : AcrSendMailService , private acrufs : AcrSendMailFormService , private aus : AuthenticationService ,

              private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;


  public isError : boolean = false;

  public error : { [key : string] : any };

  private eslug : string;

  public entry : MiscRequest;

  public entryForm : FormGroup = this.acrufs.entryForm();


  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false;



  public message_types : any[];

  public messages : any[];

  public isLoading : boolean = false;

  public updateAppCol : boolean = false;

  public toSend : boolean = true;

  public msgType : FormControl = new FormControl('' , []);

  public msgDetail : FormControl = new FormControl('' , []);

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.create.systemType;

    this.title = data.create.title;

    this.view = data.create.view;

    this.entryForm.patchValue({'title' : 'Super Administrator' , 'body' : 'Your role have been changed'});
    
    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            this.eslug = $e;

            this.isLoading = true;

            return this.acrus.getEntryStatus($e); })
        )

      .subscribe((result : MiscRequest) => {

          if (result == null) {

            this.isLoading = false;

            this.isError = true;

            this.error = Object.assign({'resource' : `${this.systemType} Entry Timeline`} , this.ems.message); }

          else if (result != null) {

          this.isLoading = false;

          this.entry = result; } });

  }

	public updateAppState() : void {

    this.isLoading = true;

    this.acrus.getEntryMessageType(this.eslug)

      .subscribe((result : any[]) => {

        if (result == null) {

          this.isLoading = false; }

        else if (result != null) {

          this.isLoading = false;

          this.updateAppCol = true;

          this.message_types = result;

		} });

  }

	public getMessages(entry : any) : void {

		if (entry == '') return;

    this.isLoading = true;

    this.acrus.getEntryMessageTypeList(entry)

      .subscribe((result : any[]) => {

        if (result == null) {

          this.isLoading = false; }

        else if (result != null) {

          this.isLoading = false;

          this.updateAppCol = true;

          this.messages = result;

          this.msgType.patchValue(entry);

		} });

  }

	public getMessageDetail(entry : string) : void {

		if (entry == '') return;

    this.isLoading = true;

    this.acrus.getMessageDetail(entry)

      .subscribe((result : any) => {

        if (result == null) {

          this.isLoading = false; }

        else if (result != null) {

          this.isLoading = false;

          this.updateAppCol = true;

          this.msgDetail.patchValue(entry);

          this.entryForm.patchValue({'title' : result.title , 'body' : result.body});

		} });

  }

  public createEntry(body : { [key : string] : any}) : void {

		this.error = null;

    this.isError = false;

		this.isFormProcessing = true;

		this.isFormSubmitted = true;

		this.acrus.sendMail$(this.eslug , body)

			.subscribe((result : MiscRequest) => {

				if (result == null) { this.isFormSubmitted = false;

					this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is updated.`); }

				else if (result != null && result.updated) {

          this.isLoading = false;

          this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is updated.`);

					} });


  }

  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

  get isFormValid() : boolean {

  	return this.entryForm.valid;
  }

  public removeNotification() : void {

     this.ns.removeNotification();
  }

}
