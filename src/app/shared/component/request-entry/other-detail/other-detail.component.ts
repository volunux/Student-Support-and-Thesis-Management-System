import { Component , Input , OnInit } from '@angular/core';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-other-detail',

  'templateUrl' : './other-detail.component.html',

  'styleUrls' : ['./other-detail.component.css'] ,

  'animations' : [fadeAnimation]

})

export class OtherDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() entry : { [key : string] : any };

}
