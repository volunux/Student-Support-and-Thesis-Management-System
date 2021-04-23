import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeAnimation } from '../../animations';
import { LoadingBarService } from '../../general/loading-bar.service';

@Component({

  'selector' : 'app-system-dashboard',

  'templateUrl' : './system-dashboard.component.html',

  'styleUrls' : ['./system-dashboard.component.css'] ,

  'animations' : [fadeAnimation]

})

export class SystemDashboardComponent implements OnInit {

  constructor(private router : Router , private lbs : LoadingBarService) { 

  }

  public title : string = 'System Dashboard';

  public view : string = 'upr';

  ngOnInit(): void {
  
  }

  public loadLink(link) : void {

    this.lbs.loadLink(link);

  }

}
