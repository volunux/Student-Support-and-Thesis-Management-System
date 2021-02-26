import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { GeneralRequest } from '../general-request';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { GeneralRequestService } from '../general-request.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { canUpdate } from '../roles';

@Component({

  'selector' : 'app-gr-entry-timeline',

  'templateUrl' : './gr-entry-timeline.component.html',

  'styleUrls' : ['./gr-entry-timeline.component.css'],

  'providers' : [NotificationService , ErrorMessagesService]

})

export class GeneralRequestEntryTimelineComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public grs : GeneralRequestService , 

  						public ns : NotificationService , public ems : ErrorMessagesService , private aus : AuthenticationService) {

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public entry : GeneralRequest;

  public comments : General;

  public error : { [key : string] : any };

  public isError : boolean = false

  private eslug : string;

  public rslug : string;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.timeline.systemType;

    this.title = data.timeline.title;

    this.view = data.timeline.view;

    this.viewWord = data.timeline.viewWord;

    this.link = data.timeline.link;

    this.grs.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            let $r = params.get('request');

            this.rslug = $r;

            this.eslug = $e;

          	return this.grs.getTimeline($r , $e); })
        )

      .subscribe((result : GeneralRequest) => {

					if (result == null) {

            this.isError = true;

            this.error = Object.assign({'resource' : `${this.systemType} Entry Timeline`} , this.ems.message); }

          else if (result != null) {

					this.entry = result;

          this.comments = result.timeline; } });
  }

  get userRole() : string {

  	return this.aus.userRole;
  }

  get isAdmin() : string {

      if (['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.userRole) > -1) return '/general-request';

      return '/general-request';
  }

  get canUpdateEntry() : boolean {

    return canUpdate.indexOf(this.userRole) > -1;
  }

}
