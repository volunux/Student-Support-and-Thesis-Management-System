import { Component , Input , OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { General } from '../general';
import { SearchQuery } from '../../../general/search-query';
import { GeneralRequest } from '../general-request';
import { GeneralRequestService } from '../general-request.service';
import { GeneralRequestFormService } from '../general-request-form.service';
import { GeneralSearchService } from '../../../shared/services/general-search.service';
import { GeneralAllService } from '../../../shared/module/general-all/general-all.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { canUpdate } from '../roles';
import { listAnimation } from '../../../animations';

@Component({

  'selector' : 'app-general-request-entries',

  'templateUrl' : './general-request-entries.component.html',

  'styleUrls' : ['./general-request-entries.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService , GeneralSearchService , GeneralAllService] ,

  'animations' : [listAnimation]

})

export class GeneralRequestEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute , private location : Location ,

              private grs : GeneralRequestService , private gss : GeneralSearchService , private gas : GeneralAllService ,

              private ems : ErrorMessagesService , private ns : NotificationService , private aus : AuthenticationService) { 

    this.entriesSearchedOb = this.gss.entriesSearched$.subscribe((result : GeneralRequest[]) => {

      this.location.replaceState(`/general-request/t/${this.rslug}/entries`);

      this.pageNumber = 1;

      if (result == null) {

        this.entries = [];

        this.$entriesLength = 0;

        this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.length > 0) {

      this.error = null;

      this.isError = false;

      this.$entriesLength = result.length;

      this.entries = result;

      if (this.entries.length <= 10) this.pageNumber = 1;

      if (this.entries.length > 10) this.entries.pop(); } });

    this.clearSearchOb = this.gss.clearSearch$.subscribe((cleared : boolean) => {

      this.clearSearch$(); });

    this.errorExistOb = this.gss.errorExist$.subscribe((exists : boolean) => {

      this.isError = exists; });

  }

  public systemType : string;

  public title : string;

  public view : string;

  public link : string;

  public searchFilters : { [key : string] : string };

  public entries : GeneralRequest[] = [];

  public error : General;

  public isError : boolean = false;

  public esdl : number[] = [];

  public p$esdl : boolean = false;

  public pageNumber : number = 1;

  public eslug : string;

  public rslug : string;

  public $entriesLength : number = 0;

  public $entryRef : any;

  public $link : string;

  public clearSearchOb : Subscription;

  public errorExistOb : Subscription;

  public entriesSearchedOb : Subscription;

  public searchErr$(err) {

    this.error = null;

    this.isError = false;
  }

  public clearSearch$() : void {

    this.error = null;

    this.isError = false;

    this.pageNumber = 1;

    this.location.replaceState(`/general-request/t/${this.rslug}/entries`);

    this.gss.searchCleared.next(true);

    this.getAllEntry({}); }


  public trackByAppNumber(idx : number , entry : GeneralRequest) : string {

      return entry.application_number;
  }

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.entries.systemType;

    this.title = data.entries.title;

    this.view = data.entries.view;

  	this.link = data.entries.link;

  	this.searchFilters = data.entries.searchFilters;

    this.grs.$systemType = this.systemType;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let $p = this.route.snapshot.paramMap; 

       let $q = this.gas.paramProcessor(params , this)

       this.rslug = $p.get('request');

       this.$link = `general-request/t/${this.rslug}`;

       this.grs.rtype = this.rslug;

        return this.getAllEntry($q); });

  }

  ngOnDestroy() : void {

     if (this.entriesSearchedOb != null) this.entriesSearchedOb.unsubscribe();

     if (this.clearSearchOb != null) this.clearSearchOb.unsubscribe();
      
     if (this.errorExistOb != null) this.errorExistOb.unsubscribe();
  }

  public getAllEntry(sq : SearchQuery) : void {

   this.grs.getAllEntry(sq)
  
    .subscribe((result : GeneralRequest[]) => {

      if (result == null) {

        this.entries = [];

        this.$entriesLength = 0;

        this.isError = true;

        this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message); }

      else if (result != null && result.length > 0) {

         this.error = null;

         this.isError = false;

         this.$entriesLength = result.length;

         this.entries = result; }

      if (this.entries.length > 10) this.entries.pop(); });
  }


  public addEntryToDeleteList(gridx : number , checked : boolean , idx : number) : void {

    this.gas.addEntryToDeleteList(gridx , checked , idx , this); }


  public deleteManyEntry() : void {

    this.gas.deleteManyEntry(this , this.grs); }

  get userRole() : string {

    return this.aus.userRole;
  }

  get canUpdateEntry() : boolean {

    return canUpdate.indexOf(this.userRole) > -1;
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
