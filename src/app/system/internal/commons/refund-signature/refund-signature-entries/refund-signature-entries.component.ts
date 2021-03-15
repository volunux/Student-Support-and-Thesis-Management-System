import { Component , Input , OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { General } from '../general';
import { SearchQuery } from '../../../../../shared/interfaces/search-query';
import { RefundSignature } from '../refund-signature';
import { RefundSignatureService } from '../refund-signature.service';
import { GeneralSearchService } from '../../../../../shared/services/general-search.service';
import { GeneralAllService } from '../../../../../shared/module/general-all/general-all.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { AuthenticationService } from '../../../../../authentication/authentication.service';
import { listAnimation , fadeAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-refund-signature-entries',

  'templateUrl' : './refund-signature-entries.component.html',

  'styleUrls' : ['./refund-signature-entries.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService , GeneralSearchService] ,

  'animations' : [listAnimation , fadeAnimation]

})

export class RefundSignatureEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute , private location : Location ,

              private rfss : RefundSignatureService , private gss : GeneralSearchService , private gas : GeneralAllService ,

              private ems : ErrorMessagesService , private ns : NotificationService , private aus : AuthenticationService) { 

    this.entriesSearchedOb = this.gss.entriesSearched$.subscribe((result : RefundSignature[]) => {

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

  public entries : RefundSignature[] = [];

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

  public isLoading : boolean = false;

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


  public trackByNum(idx : number , entry : RefundSignature) : string {

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

    this.rfss.$systemType = this.systemType;

    this.rfss.$sa = this.$link;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let $q = this.gas.paramProcessor(params , this);

       this.isLoading = true;

        return this.getAllEntry($q); });

  }

  ngOnDestroy() : void {

     if (this.entriesSearchedOb != null) this.entriesSearchedOb.unsubscribe();

     if (this.clearSearchOb != null) this.clearSearchOb.unsubscribe();
      
     if (this.errorExistOb != null) this.errorExistOb.unsubscribe();
  }

  public getAllEntry(sq : SearchQuery) : void {

   this.rfss.getAllEntry(sq)
  
    .subscribe((result : RefundSignature[]) => {

      if (result == null) {

        this.isLoading = false;

        this.entries = [];

        this.$entriesLength = 0;

        this.isError = true;

        this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message); }

      else if (result != null && result.length > 0) {

         this.isLoading = false;

         this.error = null;

         this.isError = false;

         this.$entriesLength = result.length;

         this.entries = result; }

      if (this.entries.length > 10) this.entries.pop(); });
  }


  public addEntryToDeleteList(gridx : number , checked : boolean , idx : number) : void {

    this.gas.addEntryToDeleteList(gridx , checked , idx , this); }


  public deleteManyEntry() : void {

    this.gas.deleteManyEntry(this , this.rfss);
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
