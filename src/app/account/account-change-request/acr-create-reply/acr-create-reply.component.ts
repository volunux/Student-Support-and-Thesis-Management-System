import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { FormGroup , FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AccountChangeRequest } from '../account-change-request';
import { General } from '../general';
import { AccountChangeRequestService } from '../account-change-request.service';
import { ReplyCreateFormService } from '../../../shared/component/reply/reply-create-form.service';
import { ReplyCreateService } from '../../../shared/component/reply/reply-create.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({

  'selector' : 'app-acr-create-reply',

  'templateUrl' : './acr-create-reply.component.html',

  'styleUrls' : ['./acr-create-reply.component.css'],

  'providers' : [ErrorMessagesService , NotificationService]

})

export class AccountChangeRequestCreateReplyComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private acrs : AccountChangeRequestService ,

              private rcfs : ReplyCreateFormService , private rcs : ReplyCreateService , private ems : ErrorMessagesService , private ns : NotificationService) {

  }

  public systemType : string;

  public title : string;

  public view : string;

  public link : string;


  public entry : AccountChangeRequest;

  public comment : General;

  public eslug : string;

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

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => { 

            let $e = params.get('entry');

            let $c = params.get('comment');

            this.eslug = $e;

            this.cslug = $c;

            this.isLoading = true;

            return this.acrs.addReply($e , $c); })
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

    this.acrs.addReply$(this.eslug , this.cslug , body)

      .subscribe((result : General) => {

        if (result == null) { 

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} reply is not added.`); 

          this.rcs.isEntryCreated.next(false); }

        if (result != null && result.updated == true) {

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} reply is added.`);

          this.isLoading = true;

          this.rcs.isEntryCreated.next(true);

         this.entryChanges(result.$data); } });
  }


  public entryChanges(data) : void {

   this.entryCreatedT = setTimeout(() => {

      return this.router.navigate(['account-change-request' , 'entries']); } , 5000) 
  }

  get notificationAvailable() : boolean {

    return this.ns.notificationStatus();
  }

  get notificationMessage() : string {

    return this.ns.getNotificationMessage();
  }

  public removeNotification() : void {

     this.ns.removeNotification();
  }

}
