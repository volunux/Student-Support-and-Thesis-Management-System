import { Component , Input , OnInit } from '@angular/core';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-request-entry-detail',

  'templateUrl' : './request-entry-detail.component.html',

  'styleUrls' : ['./request-entry-detail.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestEntryDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : { [key : string] : any };

}
