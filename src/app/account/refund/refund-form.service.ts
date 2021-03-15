import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators , ValidatorFn } from '@angular/forms';
import { searchValidator } from '../../shared/services/form-validators.service';
import { dynamicDataValidator } from '../../shared/services/dynamic-control-validator';
import { General } from './general';
import { DynamicFormValidators } from '../../shared/misc/dynamic-form-validators';

@Injectable()

export class RefundFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public permanentProps : General = {

    'status' : [Validators.required , Validators.max(90000000)]

  };


  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public entryUpdateForm() : FormGroup {

    let form : FormGroup = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(500)] } ] ,

      'status' : ['' , {'validators' : [...this.getPermanentProp('status')] } ] ,

      'stage' : ['' , {'validators' : [Validators.minLength(1) , Validators.maxLength(30) ] } ] });

      return form;
  }

  public createPermanent(datas : General , form : FormGroup) : void {

    DynamicFormValidators.createPermanent(this , datas , form);
  }

  public removeControls(controls : string[] , form : FormGroup) : void {

    DynamicFormValidators.removeControls(controls , form);
  }

  public searchForm(searchFilters? : General ) : FormControl {

    return new FormControl('' , [searchValidator(searchFilters)]);
  }

}
