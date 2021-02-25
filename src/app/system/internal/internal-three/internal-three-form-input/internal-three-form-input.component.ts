import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';

@Component({

  'selector' : 'app-internal-three-form-input',

  'templateUrl' : './internal-three-form-input.component.html',

  'styleUrls' : ['./internal-three-form-input.component.css']

})

export class InternalThreeFormInputComponent implements OnInit {

  constructor() { }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;

}
