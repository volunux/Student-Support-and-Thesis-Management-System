import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gp-entry-create-validator',

  'templateUrl' : './gp-entry-create-validator.component.html',

  'styleUrls' : ['./gp-entry-create-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralPaymentEntryCreateValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('payer-name') public payerName : FormControl;

  @Input('payer-email') public payerEmail : FormControl;

  @Input('payer-phone') public payerPhone : FormControl;

  @Input() public description : FormControl;

  @Input() public amt : FormControl;

}
