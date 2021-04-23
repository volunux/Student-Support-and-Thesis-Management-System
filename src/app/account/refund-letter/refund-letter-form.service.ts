import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators , ValidatorFn } from '@angular/forms';
import { searchValidator } from '../../shared/services/form-validators.service';
import { dynamicDataValidator } from '../../shared/services/dynamic-control-validator';
import { DynamicFormValidators } from '../../shared/misc/dynamic-form-validators';
import { General } from './general';

@Injectable()

export class RefundLetterFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public permanentProps : General = {

    'status' : [Validators.required , Validators.max(90000000)]

  };


  public mainBodyV : ValidatorFn[] = [Validators.required , Validators.minLength(30) , Validators.maxLength(8000) ];

  public entryUpdateForm() : FormGroup {

    let form : FormGroup = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(500)] } ] ,

      'status' : ['' , {'validators' : [...this.getPermanentProp('status')] } ] ,

      'stage' : ['' , {'validators' : [Validators.minLength(1) , Validators.maxLength(30) ] } ] });

      return form;
  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public removeControls(controls : string[] , form) : void {

    DynamicFormValidators.removeControls(controls , form);
  }


}
