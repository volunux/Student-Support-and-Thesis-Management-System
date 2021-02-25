import { Component , OnInit , Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-user-account-validator',

  'templateUrl' : './user-account-validator.component.html',

  'styleUrls' : ['./user-account-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class UserAccountValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('first-name') public first_name : FormControl;

  @Input('last-name') public last_name : FormControl;

  @Input('user-name') public username : FormControl;

  @Input('email-address') public email_address : FormControl;

  @Input() public about : FormControl;

  @Input() public faculty : FormControl;

  @Input() public department : FormControl;

  @Input() public level : FormControl;

  @Input() public unit : FormControl;

  @Input() public country : FormControl;

  @Input() public role : FormControl;

  @Input() public status : FormControl;

  @Input('matriculation-number') public matriculation_number : FormControl;

  @Input('identity-number') public identity_number : FormControl;

  @Input('jamb-registration-number') public jamb_registration_number : FormControl;

  @Input() public password : FormControl;

  @Input('confirm-password') public confirm_password : FormControl;

  @Input('no-edit') public noEdit : boolean;


}
