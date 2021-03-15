import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GeneralRequest } from '../general-request';
import { General } from '../general';
import { GeneralRequestService } from '../general-request.service';
import { ReplyCreateFormService } from '../../../shared/component/reply/reply-create-form.service';
import { ReplyCreateService } from '../../../shared/component/reply/reply-create.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';

@Component({

  'selector' : 'app-gr-create-reply',

  'templateUrl' : './gr-create-reply.component.html',

  'styleUrls' : ['./gr-create-reply.component.css'],

  'providers' : [ErrorMessagesService]

})

export class GeneralRequestCreateReplyComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private grs : GeneralRequestService ,

              private rcfs : ReplyCreateFormService , private rcs : ReplyCreateService , private ems : ErrorMessagesService) {

  }

  public systemType : string;

  public title : string;

  public view : string;

  public link : string;


  public entry : GeneralRequest;

  public comment : General;

  public eslug : string;

  public rslug : string;

  public cslug : string;

  public isError : boolean = false

  public error : { [key : string] : any };

  public entryCreateForm : FormGroup;

  public entryCreatedT : any;

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.reply.systemType;

    this.title = data.reply.title;

    this.view = data.reply.view;

    this.link = data.reply.link;

    this.grs.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { 

            let $r = params.get('request');

            let $e = params.get('entry');

            let $c = params.get('comment');

            this.rslug = $r;

            this.eslug = $e;

            this.cslug = $c;

            this.isLoading = true;

            return this.grs.addReply($r , $e , $c); })
        )
          .subscribe((result : General) => {

            if (result == null) { 

              this.isLoading = false;

              this.isError = true;

              this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

            else if (result != null && result.permitted == true) {

            this.isLoading = false;

            this.entry = result.$data.Entry;

            this.comment = result.$data.Comment;

            this.entryCreateForm = this.rcfs.entryCreateForm();

            let authorName = this.comment.author.full_name;

            this.entryCreateForm.patchValue({'comment_author_name' : authorName }); } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryCreatedT);
  }

  public createEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.grs.addReply$(this.rslug , this.eslug , this.cslug , body)

      .subscribe((result : General) => {

        if (result == null) { this.rcs.isEntryCreated.next(false); }

        if (result != null && result.updated == true) { this.rcs.isEntryCreated.next(true);

         this.entryChanges(result.$data); } });
  }


  public entryChanges(data) : void {

   this.entryCreatedT = setTimeout(() => {

      return this.router.navigate(['general-request' , 't' , this.rslug , 'entries']); } , 5000) 
  }

}
