import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations';
@Component({

  'selector' : 'app-welcome',

  'templateUrl' : './welcome.component.html',

  'styleUrls' : ['./welcome.component.css'] ,

  'animations' : [fadeAnimation]

})

export class WelcomeComponent implements OnInit {

	public title : string = 'Request and Service Initialization System';

  constructor() { 

  }

  ngOnInit(): void {
  
  }

}
