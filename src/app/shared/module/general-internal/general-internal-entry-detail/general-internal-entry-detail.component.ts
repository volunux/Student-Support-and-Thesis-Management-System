import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-general-internal-entry-detail',

  'templateUrl' : './general-internal-entry-detail.component.html',

  'styleUrls' : ['./general-internal-entry-detail.component.css']

})

export class GeneralInternalEntryDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : any;

}
