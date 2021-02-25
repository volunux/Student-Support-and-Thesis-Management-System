import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { User } from '../user';


@Component({

  'selector' : 'app-profile-input-fields',

  'templateUrl' : './profile-input-fields.component.html',

  'styleUrls' : ['./profile-input-fields.component.css']

})

export class ProfileInputFieldsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {

  }


  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public entry : User;

  get email_address() : FormControl {

    return this.entryForm.get('email_address') as FormControl;
  }

  get identity_number() : FormControl {

    return this.entryForm.get('identity_number') as FormControl;
  }

}
