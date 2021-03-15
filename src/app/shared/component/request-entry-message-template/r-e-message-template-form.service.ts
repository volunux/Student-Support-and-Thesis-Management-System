import { Injectable } from '@angular/core';
import { FormGroup , Validators } from '@angular/forms';
import { DynamicFormValidators } from '../../misc/dynamic-form-validators';
import { General } from './general';

@Injectable()

export class RequestEntryMessageTemplateFormService {

  constructor() { 

  }

  public permanentData : any = {};

  public commonValidators : { [key : string] : any[] } = {

    'dynamic' : [Validators.max(90000000)]
  };

  public getPermanentProp(prop : string) : any {

    return this.permanentProps[prop];
  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];
  }

  public permanentProps : { [key : string] : any[] } = {

    'messagetemplate' : this.commonValidators.dynamic

  };

  public otherCtrls : { [key : string] : any } = {

  'messagetemplate' : this.commonValidators.dynamic ,

  }

  public createPermanent(datas : General , form : FormGroup) : void {

    DynamicFormValidators.createPermanent(this , datas , form);

  }

  public removeControls(controls : string[] , form : FormGroup) : void {

    DynamicFormValidators.removeControls(controls , form);
  }

}
