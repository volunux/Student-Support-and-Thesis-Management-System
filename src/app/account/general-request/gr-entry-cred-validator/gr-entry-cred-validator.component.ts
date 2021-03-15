import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gr-entry-cred-validator',

  'templateUrl' : './gr-entry-cred-validator.component.html',

  'styleUrls' : ['./gr-entry-cred-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralRequestEntryCredentialValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') systemType : string;

  @Input() public username : FormControl;

  @Input() public password : FormControl;

}
