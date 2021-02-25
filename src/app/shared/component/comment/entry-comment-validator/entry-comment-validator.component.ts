import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-entry-comment-validator',

  'templateUrl' : './entry-comment-validator.component.html',

  'styleUrls' : ['./entry-comment-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class EntryCommentValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input() public text : FormControl;

}
