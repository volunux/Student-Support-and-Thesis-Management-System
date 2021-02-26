import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { General } from '../general';
import { GeneralInternal } from '../general-internal';
import { GeneralInternalEntryChangeService } from '../gi-entry-change.service';
import { NotificationMessageService } from '../../../component/notification/notification-message.service';

@Component({

  'selector' : 'app-gi-entry-delete',

  'templateUrl' : './gi-entry-delete.component.html',

  'styleUrls' : ['./gi-entry-delete.component.css'] ,

  'providers' : [NotificationMessageService]

})

export class GeneralInternalEntryDeleteComponent implements OnInit {

  constructor(private giecs : GeneralInternalEntryChangeService , private ns : NotificationMessageService) { 

  	this.entryChangesOb = this.giecs.isEntryChanged$

  		.subscribe((deleted : boolean) => {

  				if (deleted == false) {

 					this.isFormSubmitted = false;

 					this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not deleted.`); }

  				else if (deleted == true) {

 					this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is deleted.`); } });
  }

  ngOnInit() : void {
  
  }

  ngOnDestroy() : void {

    if(this.entryChangesOb != null) this.entryChangesOb.unsubscribe();
  }

  @Input('system-type') public systemType : string;

  @Input('system-guideline') public systemGuideline : string;

  @Input() public view : string;

  @Input() public entry : GeneralInternal;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;
  

  @Output() public processEntry : EventEmitter<{ [key : string] : any }> = new EventEmitter<{ [key : string] : any }>(); 


  public isFormModified : boolean = false;

  public formMessage : string = 'Form will not be submitted and entry will not be deleted if data are unchanged since when they were retrieved from the database.';

  public isFormProcessing : boolean = false;

  public isFormSubmitted : boolean = false;

  public entryChangesOb : Subscription;


  public changeEntry(body : { [key : string] : any}) : boolean {

    let isConfirmed = confirm('Are you sure you want to proceed with this action?');

    if (isConfirmed) {

	    this.isFormSubmitted = true;

	    this.isFormProcessing = true;
			
			this.processEntry.emit(body); }

     else { return false };

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
