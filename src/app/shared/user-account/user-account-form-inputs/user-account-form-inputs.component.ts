import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { General } from '../../interfaces/general';
import { User } from '../../interfaces/user';

@Component({

  'selector' : 'app-user-account-form-inputs',

  'templateUrl' : './user-account-form-inputs.component.html',

  'styleUrls' : ['./user-account-form-inputs.component.css']

})

export class UserAccountFormInputsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {

    console.log(this.generalOthers);
 

   console.log(this.entryForm); 
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public entry : User;

  @Input('general-others') public generalOthers : General;

  @Input('no-edit') public noEdit : boolean;

  get first_name() : FormControl {

    return this.entryForm.get('first_name') as FormControl;
  }

  get last_name() : FormControl {

    return this.entryForm.get('last_name') as FormControl;
  }

  get username() : FormControl {

    return this.entryForm.get('username') as FormControl;
  }

  get email_address() : FormControl {

    return this.entryForm.get('email_address') as FormControl
  }

  get password() : FormControl {

    return this.entryForm.get('password') as FormControl;
  } 

  get confirm_password() : FormControl {

    return this.entryForm.get('confirm_password') as FormControl;
  }

  get about() : FormControl {

    return this.entryForm.get('about') as FormControl;
  }

  get faculty() : FormControl {

    return this.entryForm.get('faculty') as FormControl;
  }

  get department() : FormControl {

    return this.entryForm.get('department') as FormControl;
  }

  get level() : FormControl {

    return this.entryForm.get('level') as FormControl;
  }

  get country() : FormControl {

    return this.entryForm.get('country') as FormControl;
  }

  get matriculation_number() : FormControl {

    return this.entryForm.get('matriculation_number') as FormControl;
  }

  get jamb_registration_number() : FormControl {

    return this.entryForm.get('jamb_registration_number') as FormControl;
  }

  get identity_number() : FormControl {

    return this.entryForm.get('identity_number') as FormControl;
  }

  get unit() : FormControl {

    return this.entryForm.get('unit') as FormControl;
  }

  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
  }

  get role() : FormControl {

    return this.entryForm.get('role') as FormControl;
  }

}
