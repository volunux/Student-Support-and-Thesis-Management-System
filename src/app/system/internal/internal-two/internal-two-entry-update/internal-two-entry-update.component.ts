import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { General } from '../general';
import { InternalTwo } from '../internal-two';

import { InternalTwoService } from '../internal-two.service';
import { InternalTwoFormService } from '../internal-two-form.service';

import { GeneralInternalFormService } from '../../../../shared/module/general-internal/gi-form.service';
import { GeneralInternalEntryChangeService } from '../../../../shared/module/general-internal/gi-entry-change.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-internal-two-entry-update',

  'templateUrl' : './internal-two-entry-update.component.html',

  'styleUrls' : ['./internal-two-entry-update.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class InternalTwoEntryUpdateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private its : InternalTwoService , private iots : InternalTwoFormService ,

  						private gifs : GeneralInternalFormService , private giecs : GeneralInternalEntryChangeService , private ems : ErrorMessagesService) {

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public entry : InternalTwo;

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

    this.its.$systemType = this.systemType;

    this.its.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            this.eslug = $e;

            return this.its.updateEntry($e); })
        )

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) {

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.permitted == true) {

        this.entry = result.$data.Entry;

        let data = result.$data;

        this.entryForm = this.gifs.entryForm();

        this.entryForm.addControl('word' , new FormControl('' , this.iots.otherCtrls.word));

        this.entryForm.patchValue(this.entry);

        this.eothers = data;

        this.iots.removeControls(this.controlFilters , this.entryForm);

        this.iots.createPermanent(data , this.entryForm);

        this.entryForm.updateValueAndValidity(); } });
   }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);

  }

  public changeEntry(body : { [key : string] : any }) : any {

    this.error = null;

    this.isError = false;

    this.its.updateEntry$(this.eslug , body)

      .subscribe((result : InternalTwo) => {

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
  
  get word() : FormControl {

    return this.entryForm.get('word') as FormControl;
  }


}
