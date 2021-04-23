import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { dynamicDataValidator } from '../../shared/services/dynamic-control-validator';
import { General } from './general';
import { DynamicFormValidators } from '../../shared/misc/dynamic-form-validators';

@Injectable()

export class MiscRequestFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public permanentProps : { [key : string] : any[] } = {

    'status' : [Validators.required , Validators.max(90000000)]

  };

  public commonValidators : { [key : string] : any[] } = {

    'text' : [Validators.required , Validators.minLength(10) , Validators.maxLength(500)]

  }

  public otherCtrls : { [key : string] : any } = {};

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

  public entryUpdateForm() : FormGroup {

    let form = this.fb.group({

      'text' : ['' , {'validators' : this.commonValidators.text } ] ,

      'status' : ['' , {'validators' : [...this.getPermanentProp('status')] } ] });

      return form;
  }

  public createPermanent(datas : General , form : FormGroup) : void {

    DynamicFormValidators.createPermanent(this , datas , form);

  }

  public removeControls(controls : string[] , form : FormGroup) : void {

    DynamicFormValidators.removeControls(controls , form);
  }


}

