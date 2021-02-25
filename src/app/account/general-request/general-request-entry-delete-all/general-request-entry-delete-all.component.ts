import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap , Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { GeneralRequestService } from '../general-request.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({

  'selector' : 'app-general-request-entry-delete-all',

  'templateUrl' : './general-request-entry-delete-all.component.html',

  'styleUrls' : ['./general-request-entry-delete-all.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService]

})

export class GeneralRequestEntryDeleteAllComponent implements OnInit {
  
	constructor(private route : ActivatedRoute , private router : Router , private grs : GeneralRequestService , 

              private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public error : General;

  public isError : boolean = false

  public isFormSubmitted : boolean = false

  public rslug : string;

  public isFormProcessing : boolean = false

  public entryChangesT : any;

  public canDelete : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.deleteAll.systemType;

    this.viewWord = data.deleteAll.viewWord;

    this.title = data.deleteAll.title;

    this.view = data.deleteAll.view;

    this.link = data.deleteAll.link;

    this.route.paramMap.pipe(

      switchMap((params : ParamMap) => {

      	let $r = params.get('request');

      	this.rslug = $r;

        return this.grs.deleteAllEntry($r); })
      )
        .subscribe((result : { [key : string] : any }[]) => {

        if (result == null) { this.canDelete = false;

          this.isError = true;

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

        else if (result != null && result.length > 0) {

          this.canDelete = true; } });
  }

  ngOnDestroy() : void {

    clearTimeout(this.entryChangesT);
  }

  public deleteAllEntry() : any {

    let isConfirmed = confirm('Are you sure you want to proceed with this action?');

    if (!isConfirmed) return false;

    this.grs.$systemType = this.systemType;

    this.isFormSubmitted = true;

    this.error = null;

    this.isError = false;

    this.isFormProcessing = true;

    this.grs.deleteAllEntry$(this.rslug)

      .subscribe((result : { [key : string] : any }) => { 

        if (result == null) { this.isFormSubmitted = false;

          this.isFormProcessing = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is unsuccessful and all ${this.systemType} entry is not deleted.`);

          return this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

         else { this.isFormSubmitted = false;

          this.ns.setNotificationStatus(true);

          this.ns.addNotification(`Operation is successful and all ${this.systemType} entry is deleted.`);

          this.$entryChanges({}); } });

  }

  public $entryChanges(data) {

    this.entryChangesT = setTimeout(() => {

      return this.router.navigate(['system' , 'general-request']); } , 5000) 
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
