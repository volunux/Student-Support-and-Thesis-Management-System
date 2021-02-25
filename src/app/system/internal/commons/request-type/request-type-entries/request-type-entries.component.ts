import { Component , Input , OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { General } from '../general';
import { SearchQuery } from '../../../../../shared/interfaces/search-query';
import { RequestType } from '../request-type';
import { RequestTypeService } from '../request-type.service';
import { GeneralSearchService } from '../../../../../shared/services/general-search.service';
import { GeneralAllService } from '../../../../../shared/module/general-all/general-all.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { listAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-request-type-entries',

  'templateUrl' : './request-type-entries.component.html',

  'styleUrls' : ['./request-type-entries.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService , GeneralSearchService] ,

  'animations' : [listAnimation] ,

})

export class RequestTypeEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute , private location : Location ,

              private rts : RequestTypeService , private gss : GeneralSearchService , private gas : GeneralAllService ,

              private ems : ErrorMessagesService , private ns : NotificationService , private aus : AuthenticationService) { 

    this.entriesSearchedOb = this.gss.entriesSearched$.subscribe((result : RequestType[]) => {

      this.location.replaceState(`/system/internal/${this.link}/entries`);

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

  public searchFilters : General;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public entries : RequestType[] = [];

  public error : General;

  public isError : boolean = false;

  public esdl : number[] = [];

  public p$esdl : boolean = false;

  public pageNumber : number = 1;

  public eslug : string;

  public $entriesLength : number = 0;

  public $entryRef : any;

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

    this.location.replaceState(`/system/internal/${this.link}/entries`);

    this.gss.searchCleared.next(true);

    this.getAllEntry({}); }


  public trackByNum(idx : number , entry : RequestType) : string {

      return entry.num;
  }

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.entries.systemType;

    this.title = data.entries.title;

    this.view = data.entries.view;

    this.link = data.entries.link;

    this.$link = data.entries.link;

    this.searchFilters = data.entries.searchFilters;

    this.rts.$systemType = this.systemType;

    this.rts.$sa = this.$link;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let $q = this.gas.paramProcessor(params , this)

        return this.getAllEntry($q); });

  }

  ngOnDestroy() : void {

     if (this.entriesSearchedOb != null) this.entriesSearchedOb.unsubscribe();

     if (this.clearSearchOb != null) this.clearSearchOb.unsubscribe();
      
     if (this.errorExistOb != null) this.errorExistOb.unsubscribe();
  }

  public getAllEntry(sq : SearchQuery) : void {

   this.rts.getAllEntry(sq)
  
    .subscribe((result : RequestType[]) => {

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

    this.gas.deleteManyEntry(this , this.rts);
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
