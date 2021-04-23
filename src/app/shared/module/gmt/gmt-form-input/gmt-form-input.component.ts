import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-gmt-form-input',

  'templateUrl' : './gmt-form-input.component.html',

  'styleUrls' : ['./gmt-form-input.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralMessageTemplateFormInputComponent implements OnInit {

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

  get body() : FormControl {

    return this.entryForm.get('body') as FormControl;
  }

  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
  }

  get entry_type() : FormControl {

    return this.entryForm.get('entry_type') as FormControl;
  }

}
