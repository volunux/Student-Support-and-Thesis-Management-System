import { Component , Input , OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute , Router , ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { General } from '../../../../../shared/interfaces/general';
import { SearchQuery } from '../../../../../shared/interfaces/search-query';
import { User } from '../user';
import { UserService } from '../user.service';
import { GeneralSearchService } from '../../../../../shared/services/general-search.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { GeneralAllService } from '../../../../../shared/module/general-all/general-all.service';
import { listAnimation } from '../../../../../animations';

@Component({

  'selector' : 'app-user-list',

  'templateUrl' : './user-list.component.html',

  'styleUrls' : ['./user-list.component.css'] ,

  'providers' : [ErrorMessagesService , NotificationService , GeneralSearchService , GeneralAllService] ,

  'animations' : [listAnimation]

})

export class UserListComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router , private location : Location ,

              private us : UserService , private gss : GeneralSearchService ,

              private gas : GeneralAllService , private ems : ErrorMessagesService , private ns : NotificationService ) { 

    this.entriesSearchedOb = this.gss.entriesSearched$.subscribe((result : User[]) => {

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

  public viewWord : string;

  public searchFilters : General;

  public title : string;

  public view : string;

  public link : string;

  public link2 : boolean;

  public $link : string;

  public entries : User[] = [];

  public error : General;

  public isError : boolean = false;

  public esdl : number[] = [];

  public p$esdl : boolean = false;

  public searchQuery : SearchQuery = {};

  public pageNumber : number = 1;

  public $entriesLength : number = 0;

  public $entryRef : any;

  public clearSearchOb : Subscription;

  public errorExistOb : Subscription;

  public entriesSearchedOb : Subscription;

  public trackById(idx : number , entry : User) : number {

      return entry._id;
  }

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.entries.systemType;

    this.title = data.entries.title;

    this.view = data.entries.view;

    this.viewWord = data.entries.viewWord;

    this.link = data.entries.link;

    this.link2 = data.link2;

    this.$link = data.entries.$link;

    this.searchFilters = data.entries.searchFilters;

    this.us.$systemType = this.systemType;

    this.us.$sa = this.$link;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let $q = this.gas.paramProcessor(params , this);

        this.getAllEntry($q); });

  }

  ngOnDestroy() : void {

     if (this.entriesSearchedOb != null) this.entriesSearchedOb.unsubscribe();

     if (this.clearSearchOb != null) this.clearSearchOb.unsubscribe();
      
     if (this.errorExistOb != null) this.errorExistOb.unsubscribe();
  }

  public getAllEntry(sq : SearchQuery) : void {

   this.us.getAllEntry(sq , this.link2)
  
    .subscribe((result : User[]) => {

      if (result == null) {

        this.entries = [];

        this.$entriesLength = 0;

        this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message); 

        this.isError = true; }

      else if (result != null && result.length > 0) {

         this.error = null;

         this.isError = false;

         this.$entriesLength = result.length;

         this.entries = result; }

      if (this.entries.length > 10) this.entries.pop(); });
  }


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


  public addEntryToDeleteList(gridx : number , checked : boolean , idx : number) : void {

    this.gas.addEntryToDeleteList(gridx , checked , idx , this);  
  }

  public deleteManyEntry() : void {

     this.gas.deleteManyEntry(this , this.us); 
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