import { Component , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { AccountChangeRequest } from '../account-change-request';
import { AccountChangeRequestService } from '../account-change-request.service';
import { CommentCreateFormService } from '../../../shared/component/comment/comment-create-form.service';
import { CommentCreateService } from '../../../shared/component/comment/comment-create.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({

  'selector' : 'app-acr-create-comment',

  'templateUrl' : './acr-create-comment.component.html',

  'styleUrls' : ['./acr-create-comment.component.css'],

  'providers' : [ErrorMessagesService , NotificationService]

})

export class AccountChangeRequestCreateCommentComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private acrs : AccountChangeRequestService ,

              private ccfs : CommentCreateFormService , private ccs : CommentCreateService , private ems : ErrorMessagesService , private ns : NotificationService) {

  }

  public systemType : string;

  public title : string;

  public view : string;

  public link : string;

  public entry : AccountChangeRequest;

  public eslug : string;

  public error : { [key : string] : any };

  public isError : boolean = false

  public entryCreateT : any;

  public entryCreateForm : FormGroup;

  public isLoading : boolean = false;


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

            return this.acrs.addComment($e); })
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

  public createEntry(body : { [key : string] : any }) : void {

    this.error = null;

    this.isError = false;

    this.acrs.addComment$(this.eslug , body)

      .subscribe((result : General) => {

        if (result == null) { 

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and ${this.systemType} comment is not added.`); 

          this.ccs.isEntryCreated.next(false); }

        if (result != null && result.updated == true) {

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and ${this.systemType} comment is added.`); 

          this.isLoading = true;

          this.ccs.isEntryCreated.next(true);

         this.entryChanges(result.$data); } });
  }

  public entryChanges(data) : void {

    this.entryCreateT = setTimeout(() => {

      return this.router.navigate(['account-change-request' , 'entries']);  } , 5000) 
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
