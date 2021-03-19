import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { switchMap } from 'rxjs/operators';

import { inputFileControl , uploadConfigUrl } from './gr-entry-create-file-control.';
import { GeneralRequest } from '../../general-request';

import { GeneralRequestEntryCreateService } from '../gr-entry-create.service';
import { GeneralRequestEntryCreateFormService } from '../gr-entry-create-form.service';

import { RequestEntryCreateFormService } from '../../../../shared/component/request-entry-create/request-entry-create-form.service';
import { RequestEntryCreateService } from '../../../../shared/component/request-entry-create/request-entry-create.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-gr-entry-create',

  'templateUrl' : './gr-entry-create.component.html',

  'styleUrls' : ['./gr-entry-create.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class GeneralRequestEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private ts : Title , private router : Router , private grs : GeneralRequestEntryCreateService , private grfs : GeneralRequestEntryCreateFormService ,

  						private recfs : RequestEntryCreateFormService , private recs : RequestEntryCreateService , private ems : ErrorMessagesService) {

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;

  public rslug : string;


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

    this.grs.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $r = params.get('request');

            this.rslug = $r;

            this.isLoading = true;

            return this.grs.addEntry($r); })
      )

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) { 

        this.isLoading = false;

        this.isError = true;

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

      else if (result != null && result.permitted == true) {

        this.isLoading = false;

        let data = result.$data;

        this.ts.setTitle(data.title);

        this.title = data.title;

        this.entryCreateForm = this.recfs.entryCreateForm(); 

        this.entryCreateForm.addControl('unit' , new FormControl('' , this.grfs.otherCtrls.unit));

        this.entryCreateForm.addControl('request_type' , new FormControl('' , this.grfs.otherCtrls.request_type)); 

        this.entryCreateForm.patchValue({'unit' : data.unit , 'request_type' : data.request_type}); 

        this.entryCreateForm.updateValueAndValidity(); } });
   }

  ngOnDestroy() : void {

    clearTimeout(this.entryCreateT);

  }

  public createEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.grs.addEntry$(this.rslug ,body)

      .subscribe((result : GeneralRequest) => {

       if (result == null) { this.recs.isEntryCreated.next(false); }

       else if (result != null && result.created == true) {

        this.isLoading = true;

        this.recs.isEntryCreated.next(true);

       	this.entryChanges(result); } });
  }

  public entryChanges(data) : void {

    this.entryCreateT = setTimeout(() => {

      return this.router.navigate(data && data.slug ?

       ['general-request' , 't' , this.rslug ] : ['general-request' , 't' , this.rslug , 'entries' ] ); } 

      , 5000);
  }


}
