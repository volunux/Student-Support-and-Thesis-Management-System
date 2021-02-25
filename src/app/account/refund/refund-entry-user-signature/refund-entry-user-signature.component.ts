import { Component , Input , OnInit } from '@angular/core';
import { Refund } from '../refund';

@Component({

  'selector' : 'app-refund-entry-user-signature',

  'templateUrl' : './refund-entry-user-signature.component.html',

  'styleUrls' : ['./refund-entry-user-signature.component.css']

})

export class RefundEntryUserSignatureComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : Refund;

}
