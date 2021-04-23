import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { General } from '../general';
import { PaymentSession } from '../payment-session';

import { PaymentSessionService } from '../payment-session.service';
import { PaymentSessionFormService } from '../payment-session-form.service';

import { GeneralInternalFormService } from '../../../../../shared/module/general-internal/gi-form.service';
import { GeneralInternalEntryChangeService } from '../../../../../shared/module/general-internal/gi-entry-change.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-payment-session-entry-create',

  'templateUrl' : './payment-session-entry-create.component.html',

  'styleUrls' : ['./payment-session-entry-create.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService] ,

  'animations' : [fadeAnimation]

})

export class PaymentSessionEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private pss : PaymentSessionService , private psfs : PaymentSessionFormService ,

  						private gifs : GeneralInternalFormService , private giecs : GeneralInternalEntryChangeService , private ems : ErrorMessagesService , private ns : NotificationService) {

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public isError : boolean = false;

  public error : General;

  public entryForm : FormGroup;

  public eothers : any;

  public noEdit : boolean;

  public controlFilters : string[];

  public placeholder : any;

  public entryChangesT : any;

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.create.systemType;

    this.title = data.create.title;

    this.view = data.create.view;

    this.link = data.create.link;

    this.$link = data.create.$link;

    this.controlFilters = data.create.controlFilters;

    this.noEdit = data.create.noEdit;

    this.placeholder = data.create.placeholder;

    this.pss.$systemType = this.systemType;

    this.pss.$sa = this.$link;

    this.isLoading = true;

    this.pss.addEntry()

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) {

        this.isLoading = false;

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.permitted == true) {

        this.isLoading = false;

        let data = result.$data;

        this.eothers = data;

        this.entryForm = this.gifs.entryForm(); 

        this.psfs.createPermanent(data , this.entryForm);

        this.entryForm.addControl('amount' , new FormControl('' , this.psfs.otherCtrls.amount));

        this.entryForm.addControl('entry_type' , new FormControl('' , this.psfs.otherCtrls.entry_type));

        this.psfs.removeControls(this.controlFilters , this.entryForm);

        this.entryForm.updateValueAndValidity(); } });
   }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);

  }

  public changeEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.pss.addEntry$(body)

      .subscribe((result : PaymentSession) => {

       if (result == null) { 

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`); 

         this.giecs.isEntryChanged.next(false); }

       else if (result != null && result.created == true) {

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is added.`); 

        this.isLoading = true;

        this.giecs.isEntryChanged.next(true);

       	this.entryChanges(result); } });
  }

  public entryChanges(data) : void {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(data && data.num ? 

        ['system' , 'internal' , this.link , 'entries'] : ['system' , 'internal' , this.link , 'entries']);  } 

      , 5000) 
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
