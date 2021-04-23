import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-user-other-field-validator',

  'templateUrl' : './user-other-field-validator.component.html',

  'styleUrls' : ['./user-other-field-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class UserOtherFieldValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public about : FormControl;

  @Input() public faculty : FormControl;

  @Input() public department : FormControl;

  @Input() public level : FormControl;

  @Input() public unit : FormControl;

  @Input() public country : FormControl;

  @Input() public role : FormControl;

  @Input() public status : FormControl;

  @Input('matriculation-number') matriculation_number : FormControl;

  @Input('identity-number') identity_number : FormControl;

  @Input('jamb-registration-number') jamb_registration_number : FormControl;

}
