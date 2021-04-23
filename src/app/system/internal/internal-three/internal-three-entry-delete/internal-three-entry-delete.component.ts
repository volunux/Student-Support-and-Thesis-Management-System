import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { General } from '../general';
import { InternalThree } from '../internal-three';

import { InternalThreeService } from '../internal-three.service';
import { InternalThreeFormService } from '../internal-three-form.service';

import { GeneralInternalConversationFormService } from '../../../../shared/module/gi-chat/gi-chat-form.service';
import { GeneralInternalConversationEntryChangeService } from '../../../../shared/module/gi-chat/gi-chat-entry-change.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../shared/services/notification.service';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-internal-three-entry-delete',

  'templateUrl' : './internal-three-entry-delete.component.html',

  'styleUrls' : ['./internal-three-entry-delete.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService] ,

  'animations' : [fadeAnimation]

})

export class InternalThreeEntryDeleteComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private its : InternalThreeService , private iots : InternalThreeFormService , private ns : NotificationService ,

  						private gifs : GeneralInternalConversationFormService , private giecs : GeneralInternalConversationEntryChangeService , private ems : ErrorMessagesService) {

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public entry : InternalThree;

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

    this.its.$systemType = this.systemType;

    this.its.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            this.eslug = $e;

            this.isLoading = true;

            return this.its.deleteEntry($e); })
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

        this.entryForm.patchValue(this.entry);

        this.iots.removeControls(this.controlFilters , this.entryForm); } });
   }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);

  }

  public changeEntry(body : { [key : string] : any }) : any {

    this.error = null;

    this.isError = false;

    this.its.deleteEntry$(this.eslug)

      .subscribe((result : InternalThree) => {

       if (result == null) {

         this.ns.setNotificationStatus(true);

         this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} is not deleted.`); 

         this.giecs.isEntryChanged.next(false); }

       else if (result != null && result.deleted == true) {

        this.ns.setNotificationStatus(true);

        this.ns.addNotification(`Operation is successful and ${this.systemType} is deleted.`); 

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
