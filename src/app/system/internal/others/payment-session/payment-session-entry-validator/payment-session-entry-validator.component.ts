import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-payment-session-entry-validator',

  'templateUrl' : './payment-session-entry-validator.component.html',

  'styleUrls' : ['./payment-session-entry-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class PaymentSessionEntryValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public amount : FormControl; 

  @Input('entry-type') public entry_type : FormControl; 
}
