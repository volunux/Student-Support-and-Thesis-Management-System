import { Injectable } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';

@Injectable()

export class GeneralInternalFormService {

  constructor(private fb : FormBuilder) { 

  }

  public foreignValidator = [Validators.required , Validators.max(90000000)];

  public entryForm() : FormGroup {

  	let form : FormGroup = this.fb.group({

  		'name' : ['' , {'validators' : [Validators.required , Validators.minLength(3) , Validators.maxLength(150)] } ] ,

  		'description' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(250)] } ] ,

	    'status' : ['' , {'validators' : this.foreignValidator } ] });

  	return form;
  }


}
