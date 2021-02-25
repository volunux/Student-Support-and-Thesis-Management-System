import { Injectable } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';

@Injectable()

export class CommentCreateFormService {

  constructor(private fb : FormBuilder) { 

  }

  public entryCreateForm() : FormGroup {

    let form : FormGroup = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(500)] } ] 

    });

      return form;
  }

}
