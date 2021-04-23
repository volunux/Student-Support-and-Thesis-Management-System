import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-request-entry-form-input-validator',

  'templateUrl' : './request-entry-form-input-validator.component.html',

  'styleUrls' : ['./request-entry-form-input-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestEntryFormInputValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public title : FormControl;

}
