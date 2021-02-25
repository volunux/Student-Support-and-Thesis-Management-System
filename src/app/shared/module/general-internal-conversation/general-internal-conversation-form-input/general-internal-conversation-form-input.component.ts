import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';

@Component({

  'selector' : 'app-general-internal-conversation-form-input',

  'templateUrl' : './general-internal-conversation-form-input.component.html',

  'styleUrls' : ['./general-internal-conversation-form-input.component.css']

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
