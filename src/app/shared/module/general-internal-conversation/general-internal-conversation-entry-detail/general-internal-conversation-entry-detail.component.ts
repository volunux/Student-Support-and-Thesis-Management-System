import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-general-internal-conversation-entry-detail',

  'templateUrl' : './general-internal-conversation-entry-detail.component.html',

  'styleUrls' : ['./general-internal-conversation-entry-detail.component.css']

})

export class GeneralInternalConversationEntryDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : any;

}
