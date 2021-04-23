import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { AccountChangeRequest } from '../account-change-request';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { AccountChangeRequestService } from '../account-change-request.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { canUpdate } from '../roles';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-acr-entry-timeline',

  'templateUrl' : './acr-entry-timeline.component.html',

  'styleUrls' : ['./acr-entry-timeline.component.css'],

  'providers' : [ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class AccountChangeRequestEntryTimelineComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public grs : AccountChangeRequestService , 

  						public ems : ErrorMessagesService , private aus : AuthenticationService) {

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public entry : AccountChangeRequest;

  public comments : General;

  public error : { [key : string] : any };

  public isError : boolean = false

  private eslug : string;

  public isLoading : boolean = false;

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

            this.eslug = $e;

            this.isLoading = true;

          	return this.grs.getTimeline($e); })
        )

      .subscribe((result : AccountChangeRequest) => {

					if (result == null) {

            this.isLoading = false;

            this.isError = true;

            this.error = Object.assign({'resource' : `${this.systemType} Entry Timeline`} , this.ems.message); }

          else if (result != null) {

          this.isLoading = false;

					this.entry = result;

          this.comments = result.timeline; } });
  }

  get userRole() : string {

  	return this.aus.userRole;
  }

  get isAdmin() : string {

      if (['superAdministrator'].indexOf(this.userRole) > -1) return '/account-change-request';

      return '/account-change-request';
  }

  get canUpdateEntry() : boolean {

    return canUpdate.indexOf(this.userRole) > -1;
  }

}
