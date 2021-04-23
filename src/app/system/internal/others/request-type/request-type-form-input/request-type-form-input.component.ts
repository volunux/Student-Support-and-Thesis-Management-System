import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-request-type-form-input',

  'templateUrl' : './request-type-form-input.component.html',

  'styleUrls' : ['./request-type-form-input.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestTypeFormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : { [key : string] : any };

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;

  get abbreviation() : FormControl {

  	return this.entryForm.get('abbreviation') as FormControl;
  }

  get unit() : FormControl {

    return this.entryForm.get('unit') as FormControl;
  }

}
