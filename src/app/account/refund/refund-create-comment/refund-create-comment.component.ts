import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { Refund } from '../refund';
import { General } from '../general';

import { RefundService } from '../refund.service';
import { CommentCreateFormService } from '../../../shared/component/comment/comment-create-form.service';
import { CommentCreateService } from '../../../shared/component/comment/comment-create.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';


@Component({

  'selector' : 'app-refund-create-comment',

  'templateUrl' : './refund-create-comment.component.html',

  'styleUrls' : ['./refund-create-comment.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class RefundCreateCommentComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private rfs : RefundService ,

  						private ccfs : CommentCreateFormService , private ccs : CommentCreateService , private ems : ErrorMessagesService) {

  }

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.comment.systemType;

    this.title = data.comment.title;

    this.view = data.comment.view;

    this.link = data.comment.link;

    this.route.paramMap

      .pipe(

        switchMap((params : ParamMap) => { 

          let $e = params.get('entry');

          this.eslug = $e;

          this.isLoading = true;

          return this.rfs.addComment($e); })
        )
          .subscribe((result : General) => {

            if (result == null) {

              this.isLoading = false;

              this.isError = true;

            	this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

            else if (result != null && result.permitted == true) {

              this.isLoading = false;

              this.entry = result.$data;

              this.entryCreateForm = this.ccfs.entryCreateForm(); } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryCreateT);

  }

  public systemType : string;

  public title : string;

  public view : string;

  public link : string;


  public entry : Refund;

  public eslug : string;

  public error : { [key : string] : any };

  public isError : boolean = false;

  public entryCreateT : any;

  public entryCreateForm : FormGroup;

  public isLoading : boolean = false;


  public createEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.rfs.addComment$(this.eslug , body)

      .subscribe((result : General) => {

        if (result == null) { this.ccs.isEntryCreated.next(false); }

        if (result != null && result.updated == true) { this.ccs.isEntryCreated.next(true);

       	this.entryChanges(result.$data); } });
  }

  public entryChanges(data) : void {

    this.entryCreateT = setTimeout(() => {

      return this.router.navigate(data && data.slug ? 

       [this.link ] : [this.link , 'entries' ] ); } 

      , 5000); 
  }


}
