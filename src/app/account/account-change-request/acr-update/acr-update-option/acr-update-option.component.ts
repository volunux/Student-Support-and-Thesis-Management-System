import { Component , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AccountChangeRequest } from '../../account-change-request';

import { AcrUpdateService } from '../acr-update.service';
import { AcrUpdateFormService } from '../acr-update-form.service';
import { canUpdate } from '../../roles';

import { AuthenticationService } from '../../../../authentication/authentication.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../shared/services/notification.service';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-acr-update-option',

  'templateUrl' : './acr-update-option.component.html',

  'styleUrls' : ['./acr-update-option.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService] ,

  'animations' : [fadeAnimation]

})

export class AcrUpdateOptionComponent implements OnInit {

  constructor(private route : ActivatedRoute , private acrus : AcrUpdateService , private acrufs : AcrUpdateFormService , private aus : AuthenticationService ,

              private ems : ErrorMessagesService , private ns : NotificationService) { 

  }

  public systemType : string;

  public systemGuideline : string;

  public title : string;

  public view : string;

  public link : string;


  public isError : boolean = false;

  public error : { [key : string] : any };

  private eslug : string;

  public entry : AccountChangeRequest;

  public entryForm : FormGroup;

  public otherOptions : FormControl = new FormControl('');

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.dashboard.systemType;

    this.title = data.dashboard.title;

    this.view = data.dashboard.view;
    
    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

            let $e = params.get('entry');

            this.eslug = $e;

            this.isLoading = true;

            return this.acrus.getEntryStatus($e); })
        )

      .subscribe((result : AccountChangeRequest) => {

          if (result == null) {

            this.isLoading = false;

            this.isError = true;

            this.error = Object.assign({'resource' : `${this.systemType} Entry Timeline`} , this.ems.message); }

          else if (result != null) {

          this.isLoading = false;

          this.otherOptions = new FormControl('');

          this.entry = result; } });

  }

}
