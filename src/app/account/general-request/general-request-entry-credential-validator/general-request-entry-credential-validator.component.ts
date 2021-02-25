import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-general-request-entry-credential-validator',

  'templateUrl' : './general-request-entry-credential-validator.component.html',

  'styleUrls' : ['./general-request-entry-credential-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralRequestEntryCredentialValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') systemType : string;

  @Input() public username : FormControl;

  @Input() public password : FormControl;

}
