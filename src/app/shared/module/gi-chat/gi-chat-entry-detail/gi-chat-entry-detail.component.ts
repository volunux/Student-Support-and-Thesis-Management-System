import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-gi-chat-entry-detail',

  'templateUrl' : './gi-chat-entry-detail.component.html',

  'styleUrls' : ['./gi-chat-entry-detail.component.css']

})

export class GeneralInternalConversationEntryDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : any;

}
