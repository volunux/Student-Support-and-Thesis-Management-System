import { Injectable } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';

@Injectable()

export class GeneralInternalConversationFormService {

  constructor(private fb : FormBuilder) { 

  }

  public foreignValidator = [Validators.required , Validators.max(90000000)];

  public entryForm() : FormGroup {

  	let form : FormGroup = this.fb.group({

  		'text' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(500)] } ] ,

	    'status' : ['' , {'validators' : this.foreignValidator } ] });

  	return form;
  }


}
