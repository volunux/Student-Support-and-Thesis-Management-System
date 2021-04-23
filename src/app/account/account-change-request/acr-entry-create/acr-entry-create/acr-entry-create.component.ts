import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { AccountChangeRequest } from '../../account-change-request';

import { AccountChangeRequestEntryCreateService } from '../acr-entry-create.service';

import { RequestEntryCreateFormService } from '../../../../shared/component/request-entry-create/request-entry-create-form.service';
import { RequestEntryCreateService } from '../../../../shared/component/request-entry-create/request-entry-create.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../shared/services/notification.service';

@Component({

  'selector' : 'app-acr-entry-create',

  'templateUrl' : './acr-entry-create.component.html',

  'styleUrls' : ['./acr-entry-create.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService]

})

export class AccountChangeRequestEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private acrecs : AccountChangeRequestEntryCreateService ,

  						private recfs : RequestEntryCreateFormService , private recs : RequestEntryCreateService , private ems : ErrorMessagesService , private ns : NotificationService) {

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;


  public isError : boolean = false;

  public error : { [key : string] : any };

  public entryCreateForm : FormGroup;

  public entryCreateT : any;

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.create.systemType;

    this.systemGuideline = data.create.systemGuideline;

    this.title = data.create.title;

    this.view = data.create.view;

    this.link = data.create.link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            this.isLoading = true;

            return this.acrecs.addEntry(); })
      )

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) { 

        this.isLoading = false;

        this.isError = true;

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

      else if (result != null && result.permitted == true) {

        this.isLoading = false;

        this.entryCreateForm = this.recfs.entryCreateForm(); } });
   }

  ngOnDestroy() : void {

    clearTimeout(this.entryCreateT);

  }

  public createEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.acrecs.addEntry$(body)

      .subscribe((result : AccountChangeRequest) => {

       if (result == null) { 

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`); 

         this.recs.isEntryCreated.next(false); }

       else if (result != null && result.created == true) {

          this.isLoading = true;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`);

        this.recs.isEntryCreated.next(true);

       	this.entryChanges(result); } });
  }

  public entryChanges(data) : void {

    this.entryCreateT = setTimeout(() => {

      return this.router.navigate(data && data.slug ?

       ['account-change-request' , 'entries'] : ['account-change-request' , 'entries' ] ); } 

      , 5000);
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
