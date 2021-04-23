import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { dynamicDataValidator } from '../../../../shared/services/dynamic-control-validator';
import { General } from './general';
import { DynamicFormValidators } from '../../../../shared/misc/dynamic-form-validators';

@Injectable()

export class RequestChangeMessageTemplateFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public foreignValidator : any = [Validators.required , Validators.max(90000000)];

  public permanentProps : { [key : string] : any[] } = {

    'status' : this.foreignValidator

  };

  public otherCtrls : { [key : string] : any } = {

  'title' : [Validators.required , Validators.minLength(3) , Validators.maxLength(150)] ,

  'body' : [Validators.required , Validators.minLength(10) , Validators.maxLength(1000)] ,

  'entry_type' : this.foreignValidator ,

  }

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public removeControls(controls : string[] , form : FormGroup) : void {

    DynamicFormValidators.removeControls(controls , form);
  }

  public createPermanent(datas : General , form : FormGroup) : void {

    DynamicFormValidators.createPermanent(this , datas , form);
  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

}
