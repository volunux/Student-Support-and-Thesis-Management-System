import { Injectable } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';

@Injectable()

export class RequestEntryCreateFormService {

  constructor(private fb : FormBuilder) { 

  }

  public entryCreateForm() : FormGroup {

  	let form : FormGroup = this.fb.group({

  		'message' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(1000)] } ] 

  	});

  	return form;
  }

}
