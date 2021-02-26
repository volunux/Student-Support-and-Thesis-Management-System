import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { dynamicDataValidator } from '../../shared/services/dynamic-control-validator';
import { General } from './general';

@Injectable()

export class GeneralRequestFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public permanentProps : { [key : string] : any[] } = {

    'unit' : [Validators.required , Validators.max(90000000)] ,

    'status' : [Validators.required , Validators.max(90000000)]

  };

  public otherCtrls : { [key : string] : any } = {

  'request_type' : [Validators.required , Validators.max(10000000)] ,

  'unit' : [Validators.required , Validators.max(10000000)] ,

  'username' : [Validators.minLength(5) , Validators.maxLength(100)] ,

  'password' : [Validators.minLength(5) , Validators.maxLength(100)]

  }

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public removeControls(controls : string[] , form) : void {

    if (controls != null && controls.length > 0) {

    controls.forEach((control) => { let ctrl = form.get(control);

      return ctrl ? form.removeControl(control) : null; }); }
  }

  public entryUpdateForm() : FormGroup {

    let form = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(500)] } ] ,

      'status' : ['' , {'validators' : [...this.getPermanentProp('status')] } ] });

      return form;
  }

    public entryTransferForm() : FormGroup {

      let form = this.fb.group({

        'text' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(500)] } ] ,

        'unit' : ['' , {'validators' : [...this.getPermanentProp('unit')] } ] });

        return form;
  }

  public createPermanent(datas : General , form : FormGroup) : void {

    if (datas != null) {

    for (let $prop in datas) {

      let propVal = $prop.toLowerCase();

      this.permanentData[propVal] = datas[$prop];

      form.get(propVal) ? form.get(propVal).setValidators([...this.permanentProps[propVal] , dynamicDataValidator(this.getMyData(propVal) , $prop)]) : null;

      form.get(propVal) ? form.get(propVal).updateValueAndValidity() : null;
    }

    form.updateValueAndValidity(); }

  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

}

