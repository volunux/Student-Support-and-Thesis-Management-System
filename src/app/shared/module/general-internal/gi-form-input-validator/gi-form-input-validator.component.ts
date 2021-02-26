import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-gi-form-input-validator',

  'templateUrl' : './gi-form-input-validator.component.html',

  'styleUrls' : ['./gi-form-input-validator.component.css'] ,

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
