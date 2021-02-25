import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-general-internal-conversation-form-input-validator',

  'templateUrl' : './general-internal-conversation-form-input-validator.component.html',

  'styleUrls' : ['./general-internal-conversation-form-input-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralInternalConversationFormInputValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public text : FormControl;

  @Input() public status : FormControl;

}
