import { Injectable , Inject } from '@angular/core';
import { Validators , ValidatorFn , FormBuilder , FormGroup , FormControl } from '@angular/forms';
import { General } from './general';
import { simplePasswordValidator , confirmPasswordValidator } from '../shared/services/password-validators.service';

@Injectable()

export class AuthenticationFormService {

  constructor(public fb : FormBuilder ) { 

  }

  public permanentData : any = {};

  public entryValidators : { [key : string] : ValidatorFn[] } = {

    'password' : [Validators.required , Validators.minLength(7) , Validators.maxLength(35) , simplePasswordValidator()] ,

  }

  public resetPassword() : FormGroup {

    let form : FormGroup = new FormGroup({

    'new_password' : new FormControl('' , this.entryValidators.password) ,

    'confirm_password' : new FormControl('' , this.entryValidators.password)

    } , [confirmPasswordValidator() ]);

    return form;
  }


}
