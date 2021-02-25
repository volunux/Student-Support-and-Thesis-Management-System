import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { dynamicDataValidator } from '../../../shared/services/dynamic-control-validator';
import { General } from '../general';

@Injectable()

export class GeneralRequestEntryCreateFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public otherCtrls : { [key : string] : any } = {

  'request_type' : [Validators.required , Validators.max(10000000)] ,

  'unit' : [Validators.required , Validators.max(10000000)] ,

  'username' : [Validators.minLength(5) , Validators.maxLength(100)] ,

  'password' : [Validators.minLength(5) , Validators.maxLength(100)]

  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];

  }

}

