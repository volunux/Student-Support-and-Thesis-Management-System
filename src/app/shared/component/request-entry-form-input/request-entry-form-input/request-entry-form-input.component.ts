import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-request-entry-form-input',

  'templateUrl' : './request-entry-form-input.component.html',

  'styleUrls' : ['./request-entry-form-input.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestEntryFormInputComponent implements OnInit {

  constructor() {

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : any;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;


  get title() : FormControl {

  	return this.entryForm.get('title') as FormControl;
  }


}
