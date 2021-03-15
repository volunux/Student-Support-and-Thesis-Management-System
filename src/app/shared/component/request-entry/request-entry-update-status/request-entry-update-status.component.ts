import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { DynamicFormValidators } from '../../../misc/dynamic-form-validators';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-request-entry-update-status',

  'templateUrl' : './request-entry-update-status.component.html',

  'styleUrls' : ['./request-entry-update-status.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestEntryUpdateStatusComponent implements OnInit {

  constructor() { 

  }

  public permanentData : any = {};

  public permanentProps : { [key : string] : any[] } = {

    'status' : [Validators.required , Validators.max(90000000)]

  };

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];
  }

  ngOnInit() : void {
  
    this.estatuses = this.entries.Status;

    this.eother = {'Status' : this.entries.Status };

    DynamicFormValidators.createPermanent(this , this.eother , this.entryForm);

  }

  public estatuses : { [key : string] : any }[];

  public eother : { [key : string] : any };

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public entries : { [key : string] : any };

  @Input() public entry : { [key : string] : any };

  get status() : FormControl {

  	return this.entryForm.get('status') as FormControl;
  }

}
