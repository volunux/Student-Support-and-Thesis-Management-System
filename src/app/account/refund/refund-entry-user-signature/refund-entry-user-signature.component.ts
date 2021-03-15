import { Component , Input , OnInit } from '@angular/core';
import { Refund } from '../refund';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-refund-entry-user-signature',

  'templateUrl' : './refund-entry-user-signature.component.html',

  'styleUrls' : ['./refund-entry-user-signature.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RefundEntryUserSignatureComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : Refund;

}
