import { Component , ElementRef , EventEmitter , Input , OnInit , Output , QueryList , ViewChildren } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RequestEntryCreateService } from '../request-entry-create.service';
import { NotificationMessageService } from '../../../component/notification/notification-message.service';
import { AttachmentUploadComponent } from '../../../module/attachment/attachment-upload/attachment-upload.component';

@Component({

  'selector' : 'app-request-entry-create',

  'templateUrl' : './request-entry-create.component.html',

  'styleUrls' : ['./request-entry-create.component.css'] ,

  'providers' : [NotificationMessageService]

})

export class RequestEntryCreateComponent implements OnInit {

  constructor(private recs : RequestEntryCreateService , private ns : NotificationMessageService) { 

  	this.entryCreatedOb = this.recs.isEntryCreated$

  		.subscribe((created : boolean) => {

  				if (created == false) {

 					this.isFormSubmitted = false;

 					this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`); }

  				else if (created == true) {

 					this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);

          if (this.attachments != null && this.attachments.length > 0) {

    			this.attachments.forEach((item : AttachmentUploadComponent) => {

      if (item.currentlyUploading == true && item.cancelFile != null) { item.cancelFile.unsubscribe(); 

        item.formSubmittedUploadCancel(); } }); } } });

  }

  ngOnInit() : void {
  
  }

  ngOnDestroy() : void {

    if(this.entryCreatedOb != null) this.entryCreatedOb.unsubscribe();
  }

  @Input('system-type') public systemType : string;

  @Input('system-guideline') public systemGuideline : string;

  @Input() public view : string;

  @Input('entry-create-form') public entryCreateForm : FormGroup;


  @Input('input-file-control') public inputFileControl : { [key : string] : string }[];

  @Input('attachment-config') public attachmentConfig : { [key : string] : string };

  @Input('upload-config-u') public uploadConfigU : { [key : string] : string };

  @ViewChildren('attachments') attachments : QueryList<AttachmentUploadComponent>;

  @ViewChildren('fileAttachment') fileInputs : QueryList<ElementRef>;

  @Output() public processEntry : EventEmitter<{ [key : string] : any }> = new EventEmitter<{ [key : string] : any }>(); 


  public submission : boolean = false;

  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false;

  public entryCreatedOb : Subscription;

  public $myFiles : { [key : string] : string | number }[] = [];


  public createEntry(body : { [key : string] : any}) : void {

    this.submission = true;

    if (body != null) body.documents = [];

    if (this.attachments != null && this.attachments.length > 0) {

    this.attachments.forEach((item : AttachmentUploadComponent) => {

      if (item.$$file != null && item.$$file.location) { body.documents.push(item.$$file); } }); }

    this.isFormSubmitted = true;

    this.isFormProcessing = true;

    this.processEntry.emit(body);

  }

  public pushFile(file) {

    this.$myFiles.push(file);
  }

  get message() : FormControl {

  	return this.entryCreateForm.get('message') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryCreateForm.valid;
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
