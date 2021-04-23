import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-rcmt-form-input',

  'templateUrl' : './rcmt-form-input.component.html',

  'styleUrls' : ['./rcmt-form-input.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestChangeMessageTemplateFormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : { [key : string] : any };

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;

  get body() : FormControl {

    return this.entryForm.get('body') as FormControl;
  }

  get entry_type() : FormControl {

    return this.entryForm.get('entry_type') as FormControl;
  }

}
