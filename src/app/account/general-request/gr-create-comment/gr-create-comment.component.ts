import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { GeneralRequest } from '../general-request';

import { GeneralRequestService } from '../general-request.service';
import { CommentCreateFormService } from '../../../shared/component/comment/comment-create-form.service';
import { CommentCreateService } from '../../../shared/component/comment/comment-create.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-gr-create-comment',

  'templateUrl' : './gr-create-comment.component.html',

  'styleUrls' : ['./gr-create-comment.component.css'],

  'providers' : [ErrorMessagesService]

})

export class GeneralRequestCreateCommentComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private grs : GeneralRequestService ,

              private ccfs : CommentCreateFormService , private ccs : CommentCreateService , private ems : ErrorMessagesService) {

  }

  public systemType : string;

  public title : string;

  public view : string;

  public link : string;

  public entry : GeneralRequest;

  public rslug : string;

  public eslug : string;

  public error : { [key : string] : any };

  public isError : boolean = false

  public entryCreateT : any;

  public entryCreateForm : FormGroup;


  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.comment.systemType;

    this.title = data.comment.title;

    this.view = data.comment.view;  

    this.link = data.comment.link;

    this.grs.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { 

            let $e = params.get('entry');

            let $r = params.get('request');

            this.rslug = $r;

            this.eslug = $e;

            return this.grs.addComment($r , $e); })
        )
          .subscribe((result : General) => {

            if (result == null) { this.isError = true;

              this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

            else if (result != null && result.permitted == true) {

            this.entry = result.$data;

            this.entryCreateForm = this.ccfs.entryCreateForm(); } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryCreateT);

  }

  public createEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.grs.addComment$(this.rslug , this.eslug , body)

      .subscribe((result : General) => {

        if (result == null) { this.ccs.isEntryCreated.next(false); }

        if (result != null && result.updated == true) { this.ccs.isEntryCreated.next(true);

         this.entryChanges(result.$data); } });
  }

  public entryChanges(data) : void {

    this.entryCreateT = setTimeout(() => {

      return this.router.navigate(['general-request' , 't' , this.rslug , 'entries']);  } , 5000) 
  }
}
