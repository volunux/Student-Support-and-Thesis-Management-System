import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { General } from '../general';
import { AccountChangeMessageTemplateType } from '../acmtt';

import { AccountChangeMessageTemplateTypeService } from '../acmtt.service';
import { AccountChangeMessageTemplateTypeFormService } from '../acmtt-form.service';

import { GeneralInternalFormService } from '../../../../../shared/module/general-internal/gi-form.service';
import { GeneralInternalEntryChangeService } from '../../../../../shared/module/general-internal/gi-entry-change.service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-acmtt-entry-update',

  'templateUrl' : './acmtt-entry-update.component.html',

  'styleUrls' : ['./acmtt-entry-update.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService] ,

  'animations' : [fadeAnimation]

})

export class AccountChangeMessageTemplateTypeEntryUpdateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private rts : AccountChangeMessageTemplateTypeService , private iofs : AccountChangeMessageTemplateTypeFormService ,

  						private gifs : GeneralInternalFormService , private giecs : GeneralInternalEntryChangeService , private ems : ErrorMessagesService , private ns : NotificationService) {

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public entry : AccountChangeMessageTemplateType;

  public isError : boolean = false;

  public error : General;

  public entryForm : FormGroup;

  public eothers : any;

  public noEdit : boolean;

  public controlFilters : string[];

  public placeholder : any;

  public entryChangesT : any;

  public isLoading : boolean = false;

  private eslug : string;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.update.systemType;

    this.title = data.update.title;

    this.view = data.update.view;

    this.link = data.update.link;

    this.$link = data.update.$link;

    this.controlFilters = data.update.controlFilters;

    this.noEdit = data.update.noEdit;

    this.placeholder = data.update.placeholder;

    this.rts.$systemType = this.systemType;

    this.rts.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            this.eslug = $e;

            this.isLoading = true;

            return this.rts.updateEntry($e); })
        )

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) {

        this.isLoading = false;

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.permitted == true) {

        this.isLoading = false;

        this.entry = result.$data.Entry;

        let data = result.$data;

        this.entryForm = this.gifs.entryForm();

        this.entryForm.addControl('title' , new FormControl('' , this.iofs.otherCtrls.title));

        this.entryForm.patchValue(this.entry);

        this.eothers = data;

        this.iofs.removeControls(this.controlFilters , this.entryForm);

        this.iofs.createPermanent(data , this.entryForm);

        this.entryForm.updateValueAndValidity(); } });
   }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);

  }

  public changeEntry(body : { [key : string] : any }) : any {

    this.error = null;

    this.isError = false;

    this.rts.updateEntry$(this.eslug , body)

      .subscribe((result : AccountChangeMessageTemplateType) => {

       if (result == null) { 

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not updated.`); 

         this.giecs.isEntryChanged.next(false); }

       else if (result != null && result.updated == true) {

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is updated.`); 

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
