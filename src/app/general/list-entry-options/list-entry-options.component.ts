import { Component , OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({

  'selector' : 'app-list-entry-options',

  'templateUrl' : './list-entry-options.component.html',

  'styleUrls' : ['./list-entry-options.component.css'] ,

  'animations' : [fadeAnimation]

})

export class ListEntryOptionsComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

}
