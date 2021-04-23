import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { dynamicDataValidator } from '../../../../shared/services/dynamic-control-validator';
import { General } from './general';
import { DynamicFormValidators } from '../../../../shared/misc/dynamic-form-validators';

@Injectable()

export class AccountChangeMessageTemplateFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public foreignValidator : any = [Validators.required , Validators.max(90000000)];

  public permanentProps : { [key : string] : any[] } = {

    'status' : this.foreignValidator

  };

  public otherCtrls : { [key : string] : any } = {

  }

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

  public removeControls(controls : string[] , form : FormGroup) : void {

    DynamicFormValidators.removeControls(controls , form);

  }

  public createPermanent(datas : General , form : FormGroup) : void {

    DynamicFormValidators.createPermanent(this , datas , form);

  }

}
