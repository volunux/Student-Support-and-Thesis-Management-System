import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { General } from '../general';
import { InternalTwo } from '../internal-two';

import { InternalTwoService } from '../internal-two.service';
import { InternalTwoFormService } from '../internal-two-form.service';

import { GeneralInternalFormService } from '../../../../shared/module/general-internal/general-internal-form.service';
import { GeneralInternalEntryChangeService } from '../../../../shared/module/general-internal/general-internal-entry-change.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-internal-two-entry-create',

  'templateUrl' : './internal-two-entry-create.component.html',

  'styleUrls' : ['./internal-two-entry-create.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class InternalTwoEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private its : InternalTwoService , private iots : InternalTwoFormService ,

  						private gifs : GeneralInternalFormService , private giecs : GeneralInternalEntryChangeService , private ems : ErrorMessagesService) {

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

    this.its.$systemType = this.systemType;

    this.its.$sa = this.$link;

    this.its.addEntry()

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) {

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.permitted == true) {

        let data = result.$data;

        this.eothers = data;

        this.entryForm = this.gifs.entryForm(); 

        this.iots.createPermanent(data , this.entryForm);

        this.iots.removeControls(this.controlFilters , this.entryForm);

        this.entryForm.addControl('word' , new FormControl('' , this.iots.otherCtrls.word));

        this.entryForm.updateValueAndValidity(); } });
   }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);

  }

  public changeEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.its.addEntry$(body)

      .subscribe((result : InternalTwo) => {

       if (result == null) { 

         this.giecs.isEntryChanged.next(false); }

       else if (result != null && result.created == true) { 

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
