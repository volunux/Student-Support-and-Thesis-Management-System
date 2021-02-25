import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-request-entry-status',

  'templateUrl' : './request-entry-status.component.html',

  'styleUrls' : ['./request-entry-status.component.css']

})

export class RequestEntryStatusComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : { [key : string] : any } ;

  @Input('system-type') public systemType : string;

}
