import { Injectable } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { General , emailAddress } from '../../shared/interfaces/general';
import { emailAddressValidator } from '../../shared/services/form-validators.service';
import { simplePasswordValidator } from '../../shared/services/password-validators.service';

@Injectable()

export class UserSignInFormService {

  constructor(public fb : FormBuilder) { 

  }

  public entryForm() : FormGroup {

    return this.fb.group({

    'email_address' : ['' , {'validators' : [Validators.required , Validators.minLength(7) , Validators.maxLength(50) , emailAddressValidator(emailAddress) ] } ] ,

    'password' : ['' , {'validators' : [Validators.required , Validators.minLength(7) , Validators.maxLength(35) , simplePasswordValidator()] }  ] });

  }

}
