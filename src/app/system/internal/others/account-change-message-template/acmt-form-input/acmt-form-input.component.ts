import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-acmt-form-input',

  'templateUrl' : './acmt-form-input.component.html',

  'styleUrls' : ['./acmt-form-input.component.css'] ,

  'animations' : [fadeAnimation]

})

export class AccountChangeMessageTemplateFormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : { [key : string] : any };


  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;

}
