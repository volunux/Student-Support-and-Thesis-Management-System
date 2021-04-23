import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-payment-session-form-input',

  'templateUrl' : './payment-session-form-input.component.html',

  'styleUrls' : ['./payment-session-form-input.component.css'] ,

  'animations' : [fadeAnimation]

})

export class PaymentSessionFormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : { [key : string] : any };


  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;

  get amount() : FormControl {

  	return this.entryForm.get('amount') as FormControl;
  }

  get entry_type() : FormControl {

    return this.entryForm.get('entry_type') as FormControl;
  }

}
