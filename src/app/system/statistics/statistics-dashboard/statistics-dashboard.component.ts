import { Component , OnInit } from '@angular/core';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-statistics-dashboard',

  'templateUrl' : './statistics-dashboard.component.html',

  'styleUrls' : ['./statistics-dashboard.component.css'] ,

  'animations' : [fadeAnimation]

})

export class StatisticsDashboardComponent implements OnInit {

  constructor() { 

  }

  public systemType : string = 'Statistics';

  public title : string = 'Statistics';
  
  public view : string = 'gen-internal';

	public entries : { [key : string] : string } = {

		'user-entries' : 'User Entries' ,

		'user' : 'User' ,

    'internal-one' : 'Internal One' ,

    'internal-two' : 'Internal Two' ,

    'internal-three' : 'Internal Three' ,

    'internal-four' : 'Internal Four' ,

    'other' : 'Other' }

  ngOnInit() : void {
  
  }

}
