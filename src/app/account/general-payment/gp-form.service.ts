import { Injectable } from '@angular/core';
import { FormControl , FormGroup , FormBuilder , Validators } from '@angular/forms';
import { searchValidator , emailAddressValidator } from '../../shared/services/form-validators.service';
import { payerPhoneValidator } from './gp-form-validator.service';
import { emailAddress } from './general';
import { General } from './general';

@Injectable()

export class GeneralPaymentFormService {

  constructor(private fb : FormBuilder) { 

  }

  public $entryForm() : FormGroup {

  	let form = this.fb.group({

  		'payerName' : ['' , {'validators' : [Validators.required , Validators.minLength(4) , Validators.maxLength(40)] } ] ,

  		'payerEmail' : ['' , {'validators' : [Validators.required , Validators.minLength(4) , Validators.maxLength(40) , emailAddressValidator(emailAddress)] } ] ,

  		'payerPhone' : ['' , {'validators' : [Validators.required , Validators.minLength(10) , Validators.maxLength(14) , payerPhoneValidator() ] } ] ,

  		'description' : ['' , {'validators' : [Validators.required , Validators.minLength(9) , Validators.maxLength(200)] } ] ,

      'payment_type' : ['' , {'validators' : [Validators.required , Validators.max(100000000) ] } ] ,

      'payment_session' : ['' , {'validators' : [Validators.required , Validators.max(100000000) ] } ] ,

  		'amount' : ['' , {'validators' : [Validators.required , Validators.minLength(2) , Validators.maxLength(8)] } ]
  	
  	});

  		return form;
  }

  public searchForm(searchFilters? : General ) : FormControl {

    return new FormControl('' , [searchValidator(searchFilters)]);

  }

}
