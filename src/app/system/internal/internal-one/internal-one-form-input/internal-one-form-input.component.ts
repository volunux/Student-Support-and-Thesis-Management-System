import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';

@Component({

  'selector' : 'app-internal-one-form-input',

  'templateUrl' : './internal-one-form-input.component.html',

  'styleUrls' : ['./internal-one-form-input.component.css']

})

export class InternalOneFormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;

  get abbreviation() : FormControl {

  	return this.entryForm.get('abbreviation') as FormControl;
  }

}
