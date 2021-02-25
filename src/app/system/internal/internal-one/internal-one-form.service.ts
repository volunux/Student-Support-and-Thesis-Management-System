import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { dynamicDataValidator } from '../../../shared/services/dynamic-control-validator';
import { General } from './general';

@Injectable()

export class InternalOneFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public permanentProps : { [key : string] : any[] } = {

    'status' : [Validators.required , Validators.max(90000000)]

  };

  public otherCtrls : { [key : string] : any } = {

  'abbreviation' : [Validators.required , Validators.minLength(2) , Validators.maxLength(8)] ,

  }

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public removeControls(controls : string[] , form) : void {

    if (controls != null && controls.length > 0) {

    controls.forEach((control) => { let ctrl = form.get(control);

      return ctrl ? form.removeControl(control) : null; }); }
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
