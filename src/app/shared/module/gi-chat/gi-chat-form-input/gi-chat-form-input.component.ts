import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-gi-chat-form-input',

  'templateUrl' : './gi-chat-form-input.component.html',

  'styleUrls' : ['./gi-chat-form-input.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralInternalConversationFormInputComponent implements OnInit {

  constructor() {

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : any;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;


  get text() : FormControl {

  	return this.entryForm.get('text') as FormControl;
  }

  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
  }

}
