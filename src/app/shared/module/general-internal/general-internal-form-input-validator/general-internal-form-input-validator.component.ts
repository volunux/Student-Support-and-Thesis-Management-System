import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-general-internal-form-input-validator',

  'templateUrl' : './general-internal-form-input-validator.component.html',

  'styleUrls' : ['./general-internal-form-input-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralInternalFormInputValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public name : FormControl;

  @Input() public status : FormControl;

  @Input() public description : FormControl;

}
