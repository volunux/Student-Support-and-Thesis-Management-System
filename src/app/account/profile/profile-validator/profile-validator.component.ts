import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../animations';

@Component({
  
  'selector' : 'app-profile-validator',
  
  'templateUrl' : './profile-validator.component.html',
  
  'styleUrls' : ['./profile-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class ProfileValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') systemType : string;

  @Input('first-name') first_name : FormControl;

  @Input('last-name') last_name : FormControl;

  @Input('email-address') email_address : FormControl;

  @Input('new-password') new_password : FormControl;

  @Input('confirm-password') confirm_password : FormControl;

  @Input() country : FormControl;

  @Input() level : FormControl;

  @Input() password : FormControl;

}
