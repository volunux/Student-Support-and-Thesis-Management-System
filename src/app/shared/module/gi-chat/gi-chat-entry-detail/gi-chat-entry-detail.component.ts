import { Component , Input , OnInit } from '@angular/core';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-gi-chat-entry-detail',

  'templateUrl' : './gi-chat-entry-detail.component.html',

  'styleUrls' : ['./gi-chat-entry-detail.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralInternalConversationEntryDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : any;

}
