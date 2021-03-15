import { Component , Input , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { General } from '../general';
import { GeneralRequest } from '../general-request';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { GeneralRequestService } from '../general-request.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gr-entry-dashboard',

  'templateUrl' : './gr-entry-dashboard.component.html',

  'styleUrls' : ['./gr-entry-dashboard.component.css'],

  'providers' : [ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class GeneralRequestEntryDashboardComponent implements OnInit {

  constructor(private route : ActivatedRoute , private ts : Title , private grs : GeneralRequestService , private ems : ErrorMessagesService ,

  						private aus : AuthenticationService) {

  }

  public systemType : string;

  public title : string;

  public view : string;

  public link : string;

  public entry : GeneralRequest;

  public error : { [key : string] : any };

  public isError : boolean = false

  private rslug : string;

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.dashboard.systemType;

    this.title = data.dashboard.title;

    this.view = data.dashboard.view;

    this.link = data.dashboard.link;

    this.grs.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

        switchMap((params : ParamMap) => {

          let $r = params.get('request');

          this.rslug = $r;

          this.isLoading = true;

        	return this.grs.manageRequestEntry($r); }) )

      .subscribe((result : { [key : string] : any }) => {

				if (result == null) {

          this.isLoading = false;

          this.isError = true;

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

        else if (result != null) {

          this.isLoading = false;

          this.entry = result;

          this.ts.setTitle(result.name + ` Request`); } });
  }

  get canCreate() : boolean {

    return ['student' , 'departmentPresident' , 'facultyPresident'].indexOf(this.aus.userRole) > -1;
  }

  get canDeleteAll() : boolean {

    return this.aus.isSuperAdministrator;
  }

}
