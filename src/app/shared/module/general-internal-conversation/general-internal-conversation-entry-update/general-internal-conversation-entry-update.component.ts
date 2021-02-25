import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { General } from '../general';
import { GeneralInternalConversation } from '../general-internal-conversation';
import { nullRemover , checkFormChanges } from '../../../services/others';
import { GeneralInternalConversationEntryChangeService } from '../general-internal-conversation-entry-change.service';
import { NotificationMessageService } from '../../../component/notification/notification-message.service';

@Component({

  'selector' : 'app-general-internal-conversation-entry-update',

  'templateUrl' : './general-internal-conversation-entry-update.component.html',

  'styleUrls' : ['./general-internal-conversation-entry-update.component.css'] ,

  'providers' : [NotificationMessageService]

})

export class GeneralInternalConversationEntryUpdateComponent implements OnInit {

  constructor(private giecs : GeneralInternalConversationEntryChangeService , private ns : NotificationMessageService) { 

  	this.entryChangesOb = this.giecs.isEntryChanged$

  		.subscribe((updated : boolean) => {

  				if (updated == false) {

 					this.isFormSubmitted = false;

 					this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`); }

  				else if (updated == true) {

 					this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is updated.`); } });
  }

  ngOnInit() : void {
  
  }

  ngOnDestroy() : void {

    if(this.entryChangesOb != null) this.entryChangesOb.unsubscribe();
  }

  @Input('system-type') public systemType : string;

  @Input('system-guideline') public systemGuideline : string;

  @Input() public view : string;

  @Input() public entry : GeneralInternalConversation;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : any;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;
  

  @Output() public processEntry : EventEmitter<{ [key : string] : any }> = new EventEmitter<{ [key : string] : any }>(); 


  public isFormModified : boolean = false;

  public formMessage : string = 'Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.';

  public isFormProcessing : boolean = false;

  public isFormSubmitted : boolean = false;

  public entryChangesOb : Subscription;


  public confirmChanges(entry : General , body : General) : boolean {

    checkFormChanges(entry , body , this);

    return this.isFormModified;
  }


  public changeEntry(body : { [key : string] : any}) : void {

    this.isFormProcessing = true;

    this.confirmChanges(this.entry , body);

    if (this.isFormModified == true) {

      this.isFormSubmitted = true;

      this.processEntry.emit(body); }

    else { 

      this.isFormProcessing = false;

      false; }

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
