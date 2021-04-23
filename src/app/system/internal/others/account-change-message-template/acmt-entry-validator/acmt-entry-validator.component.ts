import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-acmt-entry-validator',

  'templateUrl' : './acmt-entry-validator.component.html',

  'styleUrls' : ['./acmt-entry-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class AccountChangeMessageTemplateEntryValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

}
