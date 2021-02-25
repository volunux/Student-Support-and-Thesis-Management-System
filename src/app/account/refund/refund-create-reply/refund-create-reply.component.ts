import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Refund } from '../refund';
import { General } from '../general';

import { RefundService } from '../refund.service';
import { ReplyCreateFormService } from '../../../shared/component/reply/reply-create-form.service';
import { ReplyCreateService } from '../../../shared/component/reply/reply-create.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';


@Component({

  'selector' : 'app-refund-create-reply',

  'templateUrl' : './refund-create-reply.component.html',

  'styleUrls' : ['./refund-create-reply.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class RefundCreateReplyComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private rfs : RefundService ,

  						private rcfs : ReplyCreateFormService , private rcs : ReplyCreateService , private ems : ErrorMessagesService) {

  }

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.reply.systemType;

    this.title = data.reply.title;

    this.view = data.reply.view;

    this.link = data.reply.link;

    this.route.paramMap

      .pipe(

        switchMap((params : ParamMap) => { 

          let $e = params.get('entry');

          let $c = params.get('comment');

          this.eslug = $e;

          this.cslug = $c;

          return this.rfs.addReply($e , $c); })
        )
          .subscribe((result : General) => {

            if (result == null) { this.isError = true;

            	this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

            else if (result != null && result.permitted == true) {

            this.entry = result.$data.Entry;

            this.comment = result.$data.Comment;

            this.entryCreateForm = this.rcfs.entryCreateForm();

            let authorName = this.comment.author.full_name;

            this.entryCreateForm.patchValue({'comment_author_name' : authorName }); } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryCreatedT);
  }

  public systemType : string;

  public title : string;

  public view : string;

  public link : string;


  public entry : Refund;

  public comment : General;

  public eslug : string;

  public cslug : string;

  public isError : boolean = false

  public error : { [key : string] : any };

  public entryCreateForm : FormGroup;

  public entryCreatedT : any;


  public createEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.rfs.addReply$(this.eslug , this.cslug , body)

      .subscribe((result : General) => {

        if (result == null) { this.rcs.isEntryCreated.next(false); }

        if (result != null && result.updated == true) { this.rcs.isEntryCreated.next(true);

       	this.entryChanges(result.$data); } });
  }

  public entryChanges(data) : void {

    this.entryCreatedT = setTimeout(() => {

      return this.router.navigate(data && data.slug ? 

       [this.link ] : [this.link , 'entries' ] ); } 

      , 5000); 
  }


}
