import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-rcmtt-entry-validator',

  'templateUrl' : './rcmtt-entry-validator.component.html',

  'styleUrls' : ['./rcmtt-entry-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestChangeMessageTemplateTypeEntryValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

}
