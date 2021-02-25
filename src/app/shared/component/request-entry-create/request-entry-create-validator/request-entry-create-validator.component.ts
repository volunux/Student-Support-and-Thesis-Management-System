import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-request-entry-create-validator',

  'templateUrl' : './request-entry-create-validator.component.html',

  'styleUrls' : ['./request-entry-create-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestEntryCreateValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public message : FormControl;

}
