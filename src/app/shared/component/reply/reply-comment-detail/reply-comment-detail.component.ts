import { Component , Input , OnInit } from '@angular/core';

@Component({

  'selector' : 'app-reply-comment-detail',

  'templateUrl' : './reply-comment-detail.component.html',

  'styleUrls' : ['./reply-comment-detail.component.css']

})

export class ReplyCommentDetailComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public comment : { [key : string] : any };

}
