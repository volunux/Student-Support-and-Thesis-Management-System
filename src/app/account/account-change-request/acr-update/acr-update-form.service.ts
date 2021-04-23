import { Injectable , Inject } from '@angular/core';
import { Validators , ValidatorFn , FormBuilder , FormGroup , FormControl } from '@angular/forms';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { General } from '../general';
import { DynamicFormValidators } from '../../../shared/misc/dynamic-form-validators';

@Injectable()

export class AcrUpdateFormService {

  constructor(public fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public entryValidators : { [key : string] : ValidatorFn[] } = {

    'role$unit' : [Validators.maxLength(30)] ,

  }

  public permanentProps : General = {

    'role' : [Validators.required , Validators.max(90000000)] ,

    'unit' : [Validators.required , Validators.max(90000000)] ,

  };

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public updateRole() : FormGroup {

    return this.fb.group({

      'role' : ['' , {'validators' : this.entryValidators.role$unit } ] ,

      'new_role' : ['' , {'validators' : [...this.getPermanentProp('role')] } ] });

  }

  public updateUnit() : FormGroup {

    return this.fb.group({

      'unit' : ['' , {'validators' : this.entryValidators.role$unit } ] ,

      'new_unit' : ['' , {'validators' : [...this.getPermanentProp('unit')] } ] });

  }

  public createPermanent(datas : General , form : FormGroup) : void {

    DynamicFormValidators.createPermanent(this , datas , form);

  }

  public removeControls(controls : string[] , form : FormGroup) : void {

    DynamicFormValidators.removeControls(controls , form);
  }

  public removeAsyncValidators(controls : string[] , form : FormGroup) : void {

    DynamicFormValidators.removeAsyncValidators(controls , form);
  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

  public setAsyncNullError(control : string , formCtrl : FormControl) : void {

      formCtrl.setErrors({[control + 'Service'] : null} , {'emitEvent' : true});

      formCtrl.updateValueAndValidity({'onlySelf' : true , 'emitEvent' : true});

  }

}
