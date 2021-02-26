import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { General } from '../general';
import { InternalOne } from '../internal-one';

import { InternalOneService } from '../internal-one.service';
import { InternalOneFormService } from '../internal-one-form.service';

import { GeneralInternalFormService } from '../../../../shared/module/general-internal/gi-form.service';
import { GeneralInternalEntryChangeService } from '../../../../shared/module/general-internal/gi-entry-change.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-internal-one-entry-delete',

  'templateUrl' : './internal-one-entry-delete.component.html',

  'styleUrls' : ['./internal-one-entry-delete.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class InternalOneEntryDeleteComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private ios : InternalOneService , private iofs : InternalOneFormService ,

  						private gifs : GeneralInternalFormService , private giecs : GeneralInternalEntryChangeService , private ems : ErrorMessagesService) {

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public entry : InternalOne;

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

    this.systemType = data.delete.systemType;

    this.title = data.delete.title;

    this.view = data.delete.view;

    this.link = data.delete.link;

    this.$link = data.delete.$link;

    this.controlFilters = data.delete.controlFilters;

    this.noEdit = data.delete.noEdit;

    this.placeholder = data.delete.placeholder;

    this.ios.$systemType = this.systemType;

    this.ios.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            this.eslug = $e;

            return this.ios.deleteEntry($e); })
        )

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) {

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.permitted == true) {

        this.entry = result.$data;

        this.entryForm = this.gifs.entryForm();

        this.entryForm.addControl('abbreviation' , new FormControl('' , this.iofs.otherCtrls.abbreviation));

        this.entryForm.patchValue(this.entry);

        this.iofs.removeControls(this.controlFilters , this.entryForm); } });
   }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);

  }

  public changeEntry(body : { [key : string] : any }) : any {

    this.error = null;

    this.isError = false;

    this.ios.deleteEntry$(this.eslug)

      .subscribe((result : InternalOne) => {

       if (result == null) { 

         this.giecs.isEntryChanged.next(false); }

       else if (result != null && result.deleted == true) {

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
