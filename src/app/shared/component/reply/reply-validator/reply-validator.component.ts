import { Component , Input , OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-reply-validator',

  'templateUrl' : './reply-validator.component.html',

  'styleUrls' : ['./reply-validator.component.css'] ,

  'animations' : [fadeAnimation]

})

export class ReplyValidatorComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {

  }

  @Input() public text : FormControl;

  @Input() public comment_author_name : FormControl;

}
