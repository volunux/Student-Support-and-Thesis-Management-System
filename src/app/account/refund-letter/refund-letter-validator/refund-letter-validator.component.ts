import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-refund-letter-validator',

  'templateUrl' : './refund-letter-validator.component.html',

  'styleUrls' : ['./refund-letter-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RefundLetterValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') systemType : string;

  @Input('main-body') public main_body : FormControl;


}
