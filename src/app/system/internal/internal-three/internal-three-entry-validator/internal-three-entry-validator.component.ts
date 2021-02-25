import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-internal-three-entry-validator',

  'templateUrl' : './internal-three-entry-validator.component.html',

  'styleUrls' : ['./internal-three-entry-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class InternalThreeEntryValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;
}
