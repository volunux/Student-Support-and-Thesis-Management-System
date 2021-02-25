import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-user-sign-in-validator',

  'templateUrl' : './user-sign-in-validator.component.html',

  'styleUrls' : ['./user-sign-in-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class UserSignInValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('email-address') public email_address : FormControl;

  @Input() public password : FormControl;

}
