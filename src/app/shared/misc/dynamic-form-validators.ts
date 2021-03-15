import { FormGroup } from '@angular/forms';
import { dynamicDataValidator } from '../services/dynamic-control-validator';

export class DynamicFormValidators {

  public static createPermanent(entry , datas : { [key : string] : any } , form : FormGroup) : void {

    if (datas != null) {

    for (let $prop in datas) {

      let propVal = $prop.toLowerCase().split(' ').join(' ');

      entry.permanentData[propVal] = datas[$prop];

      form.get(propVal) ? form.get(propVal).setValidators([...entry.permanentProps[propVal] , dynamicDataValidator(entry.getMyData(propVal) , $prop)]) : null;

      form.get(propVal) ? form.get(propVal).updateValueAndValidity() : null;
    }

    form.updateValueAndValidity(); }

  }

  public static removeControls(controls : string[] , form : FormGroup) : void {

    if (controls != null && controls.length > 0) {

    controls.forEach((control) => { let ctrl = form.get(control);

      return ctrl ? form.removeControl(control) : null; }); }
  }

  public static removeAsyncValidators(controls : string[] , form : FormGroup) : void {

    if (controls != null && controls.length > 0) {

    controls.forEach((control) => { 

      if (form.get(control)) {

        form.get(control).clearAsyncValidators();

        form.get(control).updateValueAndValidity(); } });

        form.updateValueAndValidity(); }

  }

}

