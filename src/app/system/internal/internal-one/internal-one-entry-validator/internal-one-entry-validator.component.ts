import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-internal-one-entry-validator',

  'templateUrl' : './internal-one-entry-validator.component.html',

  'styleUrls' : ['./internal-one-entry-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class InternalOneEntryValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public abbreviation : FormControl; 
}
