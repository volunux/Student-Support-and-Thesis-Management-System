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
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-internal-one-entry-update',

  'templateUrl' : './internal-one-entry-update.component.html',

  'styleUrls' : ['./internal-one-entry-update.component.css'] ,

  'providers' : [ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class InternalOneEntryUpdateComponent implements OnInit {

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

  public isLoading : boolean = false;

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

    this.ios.$systemType = this.systemType;

    this.ios.$sa = this.$link;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            this.eslug = $e;

            this.isLoading = true;

            return this.ios.updateEntry($e); })
        )

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) {

        this.isLoading = false;

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.permitted == true) {

        this.isLoading = false;

        this.entry = result.$data.Entry;

        let data = result.$data;

        this.entryForm = this.gifs.entryForm();

        this.entryForm.addControl('abbreviation' , new FormControl('' , this.iofs.otherCtrls.abbreviation));

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

    this.ios.updateEntry$(this.eslug , body)

      .subscribe((result : InternalOne) => {

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
