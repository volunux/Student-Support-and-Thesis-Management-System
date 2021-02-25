import { Injectable } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';

@Injectable()

export class ReplyCreateFormService {

  constructor(private fb : FormBuilder) { 

  }

  public entryCreateForm() : FormGroup {

    let form : FormGroup = this.fb.group({

      'text' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(500)] } ] ,

      'comment_author_name' : ['' , {'validators' : [Validators.required , Validators.maxLength(150)] } ] 

    });

      return form;
  }


}
