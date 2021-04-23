import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-general-request-status-entry-validator',

  'templateUrl' : './grs-entry-validator.component.html',

  'styleUrls' : ['./grs-entry-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralRequestStatusEntryValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public word : FormControl; 

  @Input('other-name') public other_name : FormControl; 
}
