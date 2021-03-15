import { Component , Input , OnInit } from '@angular/core';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-reply-comment-detail',

  'templateUrl' : './reply-comment-detail.component.html',

  'styleUrls' : ['./reply-comment-detail.component.css'] ,

  'animations' : [fadeAnimation]

})

export class ReplyCommentDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public comment : { [key : string] : any };

}
