import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { General } from '../general';
import { RequestType } from '../request-type';

import { RequestTypeService } from '../request-type.service';
import { RequestTypeFormService } from '../request-type-form.service';

import { GeneralInternalFormService } from '../../../../../shared/module/general-internal/general-internal-form.service';
import { GeneralInternalEntryChangeService } from '../../../../../shared/module/general-internal/general-internal-entry-change.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-request-type-entry-update',

  'templateUrl' : './request-type-entry-update.component.html',

  'styleUrls' : ['./request-type-entry-update.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class RequestTypeEntryUpdateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private rts : RequestTypeService , private iofs : RequestTypeFormService ,

  						private gifs : GeneralInternalFormService , private giecs : GeneralInternalEntryChangeService , private ems : ErrorMessagesService) {

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public entry : RequestType;

  public isError : boolean = false;

  public error : General;

  public entryForm : FormGroup;

  public eothers : any;

  public noEdit : boolean;

  public controlFilters : string[];

  public placeholder : any;

  public entryChangesT : any;

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

            return this.rts.updateEntry($e); })
        )

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) {

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.permitted == true) {

        this.entry = result.$data.Entry;

        let data = result.$data;

        this.entryForm = this.gifs.entryForm();

        this.entryForm.addControl('abbreviation' , new FormControl('' , this.iofs.otherCtrls.abbreviation));

        this.entryForm.addControl('unit' , new FormControl('' , this.iofs.otherCtrls.unit));

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

      .subscribe((result : RequestType) => {

       if (result == null) { 

         this.giecs.isEntryChanged.next(false); }

       else if (result != null && result.updated == true) {

        this.giecs.isEntryChanged.next(true);

       	this.entryChanges(result); } });
  }

  public entryChanges(data) : void {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(data && data.num ? 

        ['system' , 'internal' , this.link , 'entries'] : ['system' , 'internal' , this.link , 'entries']);  } 

      , 5000) 
  }
  
  get abbreviation() : FormControl {

    return this.entryForm.get('abbreviation') as FormControl;
  }


}
