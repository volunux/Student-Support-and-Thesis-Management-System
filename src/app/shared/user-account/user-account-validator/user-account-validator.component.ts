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


  @Input() public password : FormControl;

  @Input('confirm-password') public confirm_password : FormControl;

  @Input('no-edit') public noEdit : boolean;


}
