import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-gi-entry-detail',

  'templateUrl' : './gi-entry-detail.component.html',

  'styleUrls' : ['./gi-entry-detail.component.css']

})

export class GeneralInternalEntryDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public entry : any;

}
