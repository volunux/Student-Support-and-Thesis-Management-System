import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators , ValidatorFn } from '@angular/forms';
import { searchValidator } from '../../shared/services/form-validators.service';
import { dynamicDataValidator } from '../../shared/services/dynamic-control-validator';
import { General } from './general';

@Injectable()

export class RefundFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public removeControls(controls : string[] , form) : void {

    if (controls != null && controls.length > 0) {

    controls.forEach((control) => { let ctrl = form.get(control);

      return ctrl ? form.removeControl(control) : null; }); }
  }

  public permanentProps : General = {

    'status' : [Validators.required , Validators.max(90000000)]

  };


  public entryUpdateForm() : FormGroup {

    let form : FormGroup = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(500)] } ] ,

      'status' : ['' , {'validators' : [...this.getPermanentProp('status')] } ] ,

      'stage' : ['' , {'validators' : [Validators.minLength(1) , Validators.maxLength(30) ] } ] });

      return form;
  }

  public createPermanent(datas : General , form : FormGroup) : void {

    for (let $prop in datas) {

      let propVal = $prop.toLowerCase();

      this.permanentData[propVal] = datas[$prop];

      form.get(propVal) ? form.get(propVal).setValidators([...this.permanentProps[propVal] , dynamicDataValidator(this.getMyData(propVal) , $prop)]) : null;

      form.get(propVal) ? form.get(propVal).updateValueAndValidity() : null;
    }

    form.updateValueAndValidity();

  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public searchForm(searchFilters? : General ) : FormControl {

    return new FormControl('' , [searchValidator(searchFilters)]);

  }


}
