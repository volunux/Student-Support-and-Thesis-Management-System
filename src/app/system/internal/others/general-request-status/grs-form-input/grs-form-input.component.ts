import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-general-request-status-form-input',

  'templateUrl' : './grs-form-input.component.html',

  'styleUrls' : ['./grs-form-input.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralRequestStatusFormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : { [key : string] : any };

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;

  get word() : FormControl {

  	return this.entryForm.get('word') as FormControl;
  }

  get other_name() : FormControl {

    return this.entryForm.get('other_name') as FormControl;
  }

}
