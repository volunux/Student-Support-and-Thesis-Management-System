import { Component , Input , OnInit } from '@angular/core';
import { fadeAnimation } from '../../animations';

@Component({

  'selector' : 'app-loading-menu',

  'templateUrl' : './loading-menu.component.html',

  'styleUrls' : ['./loading-menu.component.css'] ,

  'animations' : [fadeAnimation]

})

export class LoadingMenuComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  public loadingBars : string[] = ['spin-1.gif' , 'spin-2.gif' , 'spin-3.gif' , 'spin-4.gif' , 'spin-5.gif'];

  get loadBar() : string {

  	return this.loadingBars[Math.floor(Math.random() * this.loadingBars.length)];
  }

  @Input('is-loading') public isLoading : boolean;

}
