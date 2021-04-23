import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { General } from '../general';
import { RequestChangeMessageTemplateType } from '../rcmtt';

import { RequestChangeMessageTemplateTypeService } from '../rcmtt.service';
import { RequestChangeMessageTemplateTypeFormService } from '../rcmtt-form.service';

import { GeneralInternalFormService } from '../../../../../shared/module/general-internal/gi-form.service';
import { GeneralInternalEntryChangeService } from '../../../../../shared/module/general-internal/gi-entry-change.service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-rcmtt-entry-delete',

  'templateUrl' : './rcmtt-entry-delete.component.html',

  'styleUrls' : ['./rcmtt-entry-delete.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService] ,

  'animations' : [fadeAnimation]

})

export class RequestChangeMessageTemplateTypeEntryDeleteComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private rts : RequestChangeMessageTemplateTypeService , private iofs : RequestChangeMessageTemplateTypeFormService ,

  						private gifs : GeneralInternalFormService , private giecs : GeneralInternalEntryChangeService , private ems : ErrorMessagesService , private ns : NotificationService) {

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public entry : RequestChangeMessageTemplateType;

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

    this.systemType = data.delete.systemType;

    this.title = data.delete.title;

    this.view = data.delete.view;

    this.link = data.delete.link;

    this.$link = data.delete.$link;

    this.controlFilters = data.delete.controlFilters;

    this.noEdit = data.delete.noEdit;

    this.placeholder = data.delete.placeholder;

    this.rts.$systemType = this.systemType;

    this.rts.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            this.eslug = $e;

            this.isLoading = true;

            return this.rts.deleteEntry($e); })
        )

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) {

        this.isLoading = false;

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.permitted == true) {

        this.isLoading = false;

        this.entry = result.$data;

        this.entryForm = this.gifs.entryForm();

        this.entryForm.addControl('title' , new FormControl('' , this.iofs.otherCtrls.title));

        this.entryForm.patchValue(this.entry);

        this.iofs.removeControls(this.controlFilters , this.entryForm); } });
   }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);

  }

  public changeEntry(body : { [key : string] : any }) : any {

    this.error = null;

    this.isError = false;

    this.rts.deleteEntry$(this.eslug)

      .subscribe((result : RequestChangeMessageTemplateType) => {

       if (result == null) {

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not deleted.`); 

         this.giecs.isEntryChanged.next(false); }

       else if (result != null && result.deleted == true) {

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is deleted.`); 

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
