import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gr-entry-transfer-validator',

  'templateUrl' : './gr-entry-transfer-validator.component.html',

  'styleUrls' : ['./gr-entry-transfer-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralRequestEntryTransferValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public systemType : string;

  @Input() public unit : FormControl;

}
