import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { fadeAnimation } from '../../../animations';
import { LoadingBarService } from '../../../general/loading-bar.service';

@Component({

  'selector' : 'app-mr-dashboard',

  'templateUrl' : './mr-dashboard.component.html',

  'styleUrls' : ['./mr-dashboard.component.css'] ,

  'animations' : [fadeAnimation]

})

export class MiscRequestDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute , private auth : AuthenticationService , private router : Router , private lbs : LoadingBarService) { 

  }

  public systemType : string;

  public title : string;
  
  public view : string;

  public link : string;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.dashboard.systemType;

    this.title = data.dashboard.title;

    this.view = data.dashboard.view;

    this.link = data.dashboard.link;
  
  }

  get canDeleteAll() : boolean {

    return this.auth.isSuperAdministrator;
  }

  public loadLink(link) : void {

    this.lbs.loadLink(link);
  }

}