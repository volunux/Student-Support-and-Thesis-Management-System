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

  @Input('is-loading') public isLoading : boolean;

}
