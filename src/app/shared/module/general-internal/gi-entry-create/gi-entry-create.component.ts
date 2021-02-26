import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GeneralInternalEntryChangeService } from '../gi-entry-change.service';
import { NotificationMessageService } from '../../../component/notification/notification-message.service';

@Component({

  'selector' : 'app-gi-entry-create',

  'templateUrl' : './gi-entry-create.component.html',

  'styleUrls' : ['./gi-entry-create.component.css'] ,

  'providers' : [NotificationMessageService]

})

export class GeneralInternalEntryCreateComponent implements OnInit {

  constructor(private giecs : GeneralInternalEntryChangeService , private ns : NotificationMessageService) { 

  	this.entryChangesOb = this.giecs.isEntryChanged$

  		.subscribe((created : boolean) => {

  				if (created == false) {

 					this.isFormSubmitted = false;

 					this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`); }

  				else if (created == true) {

 					this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`); } });
  }

  ngOnInit() : void {
  
  }

  ngOnDestroy() : void {

    if(this.entryChangesOb != null) this.entryChangesOb.unsubscribe();
  }

  @Input('system-type') public systemType : string;

  @Input('system-guideline') public systemGuideline : string;

  @Input() public view : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : any;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;
  

  @Output() public processEntry : EventEmitter<{ [key : string] : any }> = new EventEmitter<{ [key : string] : any }>(); 


  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false;

  public entryChangesOb : Subscription;


  public createEntry(body : { [key : string] : any}) : void {

    this.isFormSubmitted = true;

    this.isFormProcessing = true;

    this.processEntry.emit(body);

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
