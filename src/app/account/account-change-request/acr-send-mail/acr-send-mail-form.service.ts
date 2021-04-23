import { Injectable , Inject } from '@angular/core';
import { FormGroup , FormBuilder , Validators , ValidatorFn } from '@angular/forms';

@Injectable()

export class AcrSendMailFormService {

  constructor(private fb : FormBuilder) { 

  }

  public foreignValidator = [Validators.required , Validators.max(90000000)];

  public mainBodyV : ValidatorFn[] = [Validators.required , Validators.minLength(30) , Validators.maxLength(3000) ];

  public entryForm() : FormGroup {

    let form : FormGroup = this.fb.group({

      'title' : ['' , {'validators' : [Validators.required , Validators.minLength(3) , Validators.maxLength(150)] } ] ,

      'body' :  ['' , {'validators' : [Validators.required , Validators.minLength(30) , Validators.maxLength(3000) ] } ] });

    return form;
  }


}
