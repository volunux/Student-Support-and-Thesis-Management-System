import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';

@Component({

  'selector' : 'app-gi-form-input',

  'templateUrl' : './gi-form-input.component.html',

  'styleUrls' : ['./gi-form-input.component.css']

})

export class GeneralInternalFormInputComponent implements OnInit {

  constructor() {

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : any;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;


  get name() : FormControl {

  	return this.entryForm.get('name') as FormControl;
  }

  get description() : FormControl {

    return this.entryForm.get('description') as FormControl;
  }

  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
  }

}
