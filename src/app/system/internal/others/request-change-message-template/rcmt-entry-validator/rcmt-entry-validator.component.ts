import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-rcmt-entry-validator',

  'templateUrl' : './rcmt-entry-validator.component.html',

  'styleUrls' : ['./rcmt-entry-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestChangeMessageTemplateEntryValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-type') public entry_type : FormControl; 

  @Input() public unit : FormControl; 

  @Input() public body : FormControl;
}
