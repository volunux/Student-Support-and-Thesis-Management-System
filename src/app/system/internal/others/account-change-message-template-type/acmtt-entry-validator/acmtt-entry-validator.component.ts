import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-acmtt-entry-validator',

  'templateUrl' : './acmtt-entry-validator.component.html',

  'styleUrls' : ['./acmtt-entry-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class AccountChangeMessageTemplateTypeEntryValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;
}
