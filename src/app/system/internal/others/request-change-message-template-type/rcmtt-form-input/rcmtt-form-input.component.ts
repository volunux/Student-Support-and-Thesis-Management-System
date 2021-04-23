import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-rcmtt-form-input',

  'templateUrl' : './rcmtt-form-input.component.html',

  'styleUrls' : ['./rcmtt-form-input.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestChangeMessageTemplateTypeFormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : { [key : string] : any };

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;
  
}
