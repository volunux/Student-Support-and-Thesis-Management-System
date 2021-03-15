import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-request-entry-update-validator',

  'templateUrl' : './request-entry-update-validator.component.html',

  'styleUrls' : ['./request-entry-update-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestEntryUpdateValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
   
  }

  ngDoCheck() {
  }

  @Input('system-type') systemType : string;

  @Input() public text : FormControl;

  @Input() public status : FormControl;

  @Input() stage : FormControl;

  @Input('request-message-template') request_message_template : FormControl;

}
