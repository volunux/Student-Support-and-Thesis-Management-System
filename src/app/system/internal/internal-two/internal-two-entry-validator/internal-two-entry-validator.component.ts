import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-internal-two-entry-validator',

  'templateUrl' : './internal-two-entry-validator.component.html',

  'styleUrls' : ['./internal-two-entry-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class InternalTwoEntryValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public word : FormControl; 
}
