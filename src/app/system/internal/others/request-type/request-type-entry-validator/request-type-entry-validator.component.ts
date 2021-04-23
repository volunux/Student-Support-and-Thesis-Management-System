import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-request-type-entry-validator',

  'templateUrl' : './request-type-entry-validator.component.html',

  'styleUrls' : ['./request-type-entry-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestTypeEntryValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public abbreviation : FormControl; 

  @Input() public unit : FormControl; 
}
