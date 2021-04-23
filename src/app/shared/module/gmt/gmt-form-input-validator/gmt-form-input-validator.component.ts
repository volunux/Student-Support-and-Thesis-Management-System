import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-gmt-form-input-validator',

  'templateUrl' : './gmt-form-input-validator.component.html',

  'styleUrls' : ['./gmt-form-input-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralMessageTemplateFormInputValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public title : FormControl;

  @Input() public status : FormControl;

  @Input('entry-type') public entry_type : FormControl; 

  @Input() public body : FormControl;

}
