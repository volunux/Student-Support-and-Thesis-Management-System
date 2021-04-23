import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { dynamicDataValidator } from '../../../shared/services/dynamic-control-validator';
import { General } from '../general';

@Injectable()

export class MiscRequestEntryCreateFormService {

  constructor(private fb : FormBuilder) { 

  }

  public permanentData : any = {};

  public otherCtrls : { [key : string] : any } = {

  'text' : [Validators.required , Validators.max(1000)] ,

  'title' : [Validators.required , Validators.minLength(3) , Validators.maxLength(150)] ,

  }

  public getMyData(prop : string) : string[] {

    return this.permanentData[prop];
  }

}

