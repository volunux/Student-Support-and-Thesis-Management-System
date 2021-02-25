import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReplyCreateService } from '../reply-create.service';
import { NotificationMessageService } from '../../../component/notification/notification-message.service';

@Component({

  'selector' : 'app-entry-reply-create',

  'templateUrl' : './entry-reply-create.component.html',

  'styleUrls' : ['./entry-reply-create.component.css'] ,

  'providers' : [NotificationMessageService]

})

export class EntryReplyCreateComponent implements OnInit {

  constructor(private rcs : ReplyCreateService , private ns : NotificationMessageService) { 

  	this.entryCreatedOb = this.rcs.isEntryCreated$

  		.subscribe((created : boolean) => {

  				if (created == false) {

 					this.isFormSubmitted = false;

 					this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} reply is not added.`); }

  				else if (created == true) {

 					this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} reply is added.`); } });

  }

  ngOnInit() : void {
  
  }

  ngOnDestroy() : void {

    this.entryCreatedOb.unsubscribe();
  }

  @Input('system-type') public systemType : string;

  @Input() public view : string;

  @Input() public entry : { [key : string] : any };

  @Input() public comment : { [key : string] : any };

  @Input('entry-create-form') public entryCreateForm : FormGroup;

  @Output() public processEntry : EventEmitter<{ [key : string] : any }> = new EventEmitter<{ [key : string] : any }>(); 


  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false;

  public entryCreatedOb : Subscription;


  public createEntry(body : { [key : string] : any}) : void {

    this.isFormSubmitted = true;

    this.isFormProcessing = true;

    this.processEntry.emit(body);

  }

  get text() : FormControl {

  	return this.entryCreateForm.get('text') as FormControl;
  }

  get comment_author_name() : FormControl {

  	return this.entryCreateForm.get('comment_author_name') as FormControl;
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
