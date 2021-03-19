import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';

import { inputFileControl , uploadConfigUrl } from './refund-entry-create-file-control';
import { Refund } from '../../refund';

import { RefundEntryCreateService } from '../refund-entry-create.service';
import { RequestEntryCreateService } from '../../../../shared/component/request-entry-create/request-entry-create.service';
import { RequestEntryCreateFormService } from '../../../../shared/component/request-entry-create/request-entry-create-form.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-refund-entry-create',

  'templateUrl' : './refund-entry-create.component.html',

  'styleUrls' : ['./refund-entry-create.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class RefundEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private rfecs : RefundEntryCreateService ,

  						private recfs : RequestEntryCreateFormService , private recs : RequestEntryCreateService , private ems : ErrorMessagesService) {

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

    this.rfecs.$systemType = this.systemType;

    this.isLoading = true;

    this.rfecs.addEntry()

      .subscribe((result : { [key : string] : any}) => {

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

    this.rfecs.addEntry$(body)

      .subscribe((result : Refund) => {

       if (result == null) { this.recs.isEntryCreated.next(false); }

       else if (result != null && result.created == true) { 

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


}
