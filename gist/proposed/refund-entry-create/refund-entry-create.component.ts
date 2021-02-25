import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';

import { inputFileControl } from './refund-entry-create-file-control';
import { Refund } from '../refund';

import { RefundService } from '../refund.service';
import { RequestEntryCreateFormService } from '../../../shared/component/request-entry/request-entry-create-form.service';
import { RequestEntryCreateService } from '../../../shared/component/request-entry/request-entry-create.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-refund-entry-create',

  'templateUrl' : './refund-entry-create.component.html',

  'styleUrls' : ['./refund-entry-create.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class RefundEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private rfs : RefundService ,

  						private recfs : RequestEntryCreateFormService , private recs : RequestEntryCreateService , private ems : ErrorMessagesService) {

  }

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.create.systemType;

    this.systemGuideline = data.create.systemGuideline;

    this.title = data.create.title;

    this.view = data.create.view;

    this.link = data.create.link;

    this.rfs.$systemType = this.systemType;

    this.rfs.addEntry()

    	.subscribe((result : { [key : string] : any}) => {

  			if (result == null) { this.isError = true;

  				this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

  			else if (result != null && result.permitted == true) {

					this.entryCreateForm = this.recfs.entryCreateForm(); } });
  
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryCreateT);

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

  public attachmentConfig : { [key : string] : string } = {

  	'name' : 'Image' ,

  	'type' : 'image'
  };

  public entryCreateT : any;

  public createEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.rfs.addEntry$(body)

      .subscribe((result : Refund) => {

       if (result == null) { this.recs.isEntryCreated.next(false); }

       else if (result != null && result.created == true) { this.recs.isEntryCreated.next(true);

       	this.entryChanges(result); } });
  }

  public entryChanges(data) : void {

    this.entryCreateT = setTimeout(() => {

      return this.router.navigate(data && data.slug ? 

       [this.link ] : [this.link , 'entries' ] ); } 

      , 5000);
  }


}
