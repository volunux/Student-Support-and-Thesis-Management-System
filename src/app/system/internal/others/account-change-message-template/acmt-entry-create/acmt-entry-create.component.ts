import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { General } from '../general';
import { AccountChangeMessageTemplate } from '../acmt';

import { AccountChangeMessageTemplateService } from '../acmt.service';
import { AccountChangeMessageTemplateFormService } from '../acmt-form.service';

import { GeneralMessageTemplateFormService } from '../../../../../shared/module/gmt/gmt-form.service';
import { GeneralMessageTemplateEntryChangeService } from '../../../../../shared/module/gmt/gmt-entry-change.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-acmt-entry-create',

  'templateUrl' : './acmt-entry-create.component.html',

  'styleUrls' : ['./acmt-entry-create.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService] ,

  'animations' : [fadeAnimation]

})

export class AccountChangeMessageTemplateEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private acmts : AccountChangeMessageTemplateService , private acmtfs : AccountChangeMessageTemplateFormService ,

  						private gmtfs : GeneralMessageTemplateFormService , private gmtecs : GeneralMessageTemplateEntryChangeService , private ems : ErrorMessagesService , private ns : NotificationService) {

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

    this.acmts.$systemType = this.systemType;

    this.acmts.$sa = this.$link;

    this.isLoading = true;

    this.acmts.addEntry()

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) {

        this.isLoading = false;

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.permitted == true) {

        this.isLoading = false;

        let data = result.$data;

        this.eothers = data;

        this.entryForm = this.gmtfs.entryForm(); 

        this.acmtfs.createPermanent(data , this.entryForm);

        this.acmtfs.removeControls(this.controlFilters , this.entryForm);

        this.entryForm.updateValueAndValidity(); } });
   }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);

  }

  public changeEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.acmts.addEntry$(body)

      .subscribe((result : AccountChangeMessageTemplate) => {

       if (result == null) {

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not added.`); 

         this.gmtecs.isEntryChanged.next(false); }

       else if (result != null && result.created == true) {

        this.ns.setNotificationStatus(true);

        this.ns.addNotification(`Operation is successful and ${this.systemType} is added.`); 

        this.isLoading = true;

        this.gmtecs.isEntryChanged.next(true);

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
