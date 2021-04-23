import { Injectable } from '@angular/core';
import { FormGroup , FormBuilder , Validators , ValidatorFn } from '@angular/forms';

@Injectable()

export class GeneralMessageTemplateFormService {

  constructor(private fb : FormBuilder) { 

  }

  public foreignValidator = [Validators.required , Validators.max(90000000)];

  public mainBodyV : ValidatorFn[] = [Validators.required , Validators.minLength(30) , Validators.maxLength(3000) ];

  public entryForm() : FormGroup {

  	let form : FormGroup = this.fb.group({

  		'title' : ['' , {'validators' : [Validators.required , Validators.minLength(3) , Validators.maxLength(150)] } ] ,

      'body' :  ['' , {'validators' : [Validators.required , Validators.minLength(30) , Validators.maxLength(3000) ] } ] ,

	    'status' : ['' , {'validators' : this.foreignValidator } ] ,

      'entry_type' : ['' , {'validators' : this.foreignValidator } ] });

  	return form;
  }


}
