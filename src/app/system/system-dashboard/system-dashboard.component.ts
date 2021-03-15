import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({

  'selector' : 'app-system-dashboard',

  'templateUrl' : './system-dashboard.component.html',

  'styleUrls' : ['./system-dashboard.component.css'] ,

  'animations' : [fadeAnimation]

})

export class SystemDashboardComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
  }

  public title : string = 'System Dashboard';

  public view : string = 'upr';

}
