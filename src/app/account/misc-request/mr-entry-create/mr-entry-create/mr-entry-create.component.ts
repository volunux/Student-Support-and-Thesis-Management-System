import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';

import { inputFileControl , uploadConfigUrl } from './mr-entry-create-file-control';
import { MiscRequest } from '../../misc-request';

import { MiscRequestEntryCreateService } from '../mr-entry-create.service';
import { MiscRequestEntryCreateFormService } from '../mr-entry-create-form.service';
import { RequestEntryCreateService } from '../../../../shared/component/request-entry-create/request-entry-create.service';
import { RequestEntryCreateFormService } from '../../../../shared/component/request-entry-create/request-entry-create-form.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../shared/services/notification.service';

@Component({

  'selector' : 'app-mr-entry-create',

  'templateUrl' : './mr-entry-create.component.html',

  'styleUrls' : ['./mr-entry-create.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService]

})

export class MiscRequestEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private mrecs : MiscRequestEntryCreateService , private mrecfs : MiscRequestEntryCreateFormService ,

              private ns : NotificationService , private recfs : RequestEntryCreateFormService , private recs : RequestEntryCreateService , private ems : ErrorMessagesService) {

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;

  public isError : boolean = false;

  public error : { [key : string] : any };

  public entryCreateForm : FormGroup;

  public fileControl : { [key : string] : string }[] = inputFileControl;

  public uploadConfig : { [key : string] : string } = uploadConfigUrl;

  public placeholder : { [key : string] : string } = null;

  public attachmentConfig : { [key : string] : string } = {

    'name' : 'Image' ,

    'type' : 'image'
  };

  public entryCreateT : any;

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.create.systemType;

    this.systemGuideline = data.create.systemGuideline;

    this.title = data.create.title;

    this.view = data.create.view;

    this.link = data.create.link;

    this.placeholder = data.create.placeholder;

    this.mrecs.$systemType = this.systemType;

    this.isLoading = true;

    this.mrecs.addEntry()

      .subscribe((result : { [key : string] : any}) => {

        if (result == null) { 

          this.isLoading = false;

          this.isError = true;

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

        else if (result != null && result.permitted == true) {

          this.isLoading = false;

          this.entryCreateForm = this.recfs.entryCreateForm(); 

        this.entryCreateForm.addControl('title' , new FormControl('' , this.mrecfs.otherCtrls.title));

        this.entryCreateForm.updateValueAndValidity(); 

        console.log(this.entryCreateForm);

      } });
  
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryCreateT);

  }

  public createEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.mrecs.addEntry$(body)

      .subscribe((result : MiscRequest) => {

       if (result == null) { 

         this.ns.setNotificationStatus(true);

         this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} Entry is not created.`); 

         this.recs.isEntryCreated.next(false); }

       else if (result != null && result.created == true) {

         this.ns.setNotificationStatus(true);

         this.ns.addNotification(`Operation is successful and ${this.systemType} Entry is created.`);

         this.isLoading = true;

         this.recs.isEntryCreated.next(true);

         this.entryChanges(result); } });
  }

  public entryChanges(data) : void {

    this.entryCreateT = setTimeout(() => {

      return this.router.navigate(data && data.slug ? 

       [this.link ] : [this.link , 'entries' ] ); } 

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
