import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { General } from '../general';
import { Department } from '../department';

import { DepartmentService } from '../department.service';
import { DepartmentFormService } from '../department-form.service';

import { GeneralInternalFormService } from '../../../../../shared/module/general-internal/general-internal-form.service';
import { GeneralInternalEntryChangeService } from '../../../../../shared/module/general-internal/general-internal-entry-change.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-department-entry-create',

  'templateUrl' : './department-entry-create.component.html',

  'styleUrls' : ['./department-entry-create.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class DepartmentEntryCreateComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private dps : DepartmentService , private dpfs : DepartmentFormService ,

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

    this.dps.$systemType = this.systemType;

    this.dps.$sa = this.$link;

    this.dps.addEntry()

    .subscribe((result : { [key : string] : any }) => {

      if (result == null) {

        this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.permitted == true) {

        let data = result.$data;

        this.eothers = data;

        this.entryForm = this.gifs.entryForm(); 

        this.dpfs.createPermanent(data , this.entryForm);

        this.dpfs.removeControls(this.controlFilters , this.entryForm);

        this.entryForm.addControl('abbreviation' , new FormControl('' , this.dpfs.otherCtrls.abbreviation));

        this.entryForm.addControl('faculty' , new FormControl('' , this.dpfs.otherCtrls.faculty));

        this.entryForm.updateValueAndValidity(); } });
   }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);

  }

  public changeEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.dps.addEntry$(body)

      .subscribe((result : Department) => {

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
  
  get abbreviation() : FormControl {

    return this.entryForm.get('abbreviation') as FormControl;
  }


}
