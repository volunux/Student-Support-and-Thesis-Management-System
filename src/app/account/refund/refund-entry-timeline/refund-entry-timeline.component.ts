import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { Refund } from '../refund';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { RefundService } from '../refund.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { canUpdate } from '../roles';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-refund-entry-timeline',

  'templateUrl' : './refund-entry-timeline.component.html',

  'styleUrls' : ['./refund-entry-timeline.component.css'] ,

  'providers' : [ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class RefundEntryTimelineComponent implements OnInit {

  constructor(public router : Router , private route : ActivatedRoute , public rfs : RefundService , 

  						public ems : ErrorMessagesService , private aus : AuthenticationService) {

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public entry : Refund;

  public comments : { [key : string] : any }[];


  public isError : boolean = false

  public error : General;

  private eslug : string;

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.timeline.systemType;

    this.title = data.timeline.title;

    this.view = data.timeline.view;

    this.viewWord = data.timeline.viewWord;

    this.link = data.timeline.link;

    this.rfs.$systemType = this.systemType;


    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            this.eslug = $e;

            this.isLoading = true;

          	return this.rfs.getTimeline($e); })
        )

      .subscribe((result : Refund) => {

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

      if (['moderator' , 'administrator' , 'superAdministrator'].indexOf(this.userRole) > -1) return '/refund';

      return '/refund';
  }

  get canUpdateEntry() : boolean {

    return canUpdate.indexOf(this.userRole) > -1;
  }

}
