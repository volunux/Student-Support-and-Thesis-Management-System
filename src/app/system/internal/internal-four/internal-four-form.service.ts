import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { dynamicDataValidator } from '../../../shared/services/dynamic-control-validator';
import { General } from './general';

@Injectable()

export class InternalFourFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public permanentProps : { [key : string] : any[] } = {};

  public otherCtrls : { [key : string] : any } = {

  }

  public getPermanentProp(prop : string) : any {}

  public removeControls(controls : string[] , form) : void {}

  public createPermanent(datas : General , form : FormGroup) : void {}

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

}
