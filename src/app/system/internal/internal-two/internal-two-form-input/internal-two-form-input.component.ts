import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-internal-two-form-input',

  'templateUrl' : './internal-two-form-input.component.html',

  'styleUrls' : ['./internal-two-form-input.component.css']

})

export class InternalTwoFormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;

  get word() : FormControl {

  	return this.entryForm.get('word') as FormControl;
  }

}
