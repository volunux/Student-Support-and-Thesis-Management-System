import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-comment-entry-status',

  'templateUrl' : './comment-entry-status.component.html',

  'styleUrls' : ['./comment-entry-status.component.css']

})

export class CommentEntryStatusComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : { [key : string] : any } ;

  @Input('system-type') public systemType : string;

}
