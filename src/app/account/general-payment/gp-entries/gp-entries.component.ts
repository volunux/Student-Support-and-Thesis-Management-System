import { Component , Input , OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { General } from '../general';
import { SearchQuery } from '../../../general/search-query';
import { GeneralPayment } from '../general-payment';
import { GeneralPaymentService } from '../general-payment.service';
import { GeneralPaymentFormService } from '../gp-form.service';
import { GeneralSearchService } from '../../../shared/services/general-search.service';
import { GeneralAllService } from '../../../shared/module/general-all/general-all.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { canUpdate } from '../roles';
import { listAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gp-entries',

  'templateUrl' : './gp-entries.component.html',

  'styleUrls' : ['./gp-entries.component.css'] ,

  'providers' : [NotificationService , ErrorMessagesService , GeneralSearchService , GeneralAllService] ,

  'animations' : [listAnimation]

})

export class GeneralPaymentEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute , private location : Location ,

              private gps : GeneralPaymentService , private gss : GeneralSearchService , private gas : GeneralAllService ,

              private ems : ErrorMessagesService , private ns : NotificationService , private aus : AuthenticationService) { 

    this.entriesSearchedOb = this.gss.entriesSearched$.subscribe((result : GeneralPayment[]) => {

      this.location.replaceState(`/general-payment/t/${this.pslug}/entries`);

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

  public entries : GeneralPayment[] = [];

  public error : General;

  public isError : boolean = false;

  public esdl : number[] = [];

  public p$esdl : boolean = false;

  public pageNumber : number = 1;

  public eslug : string;

  public pslug : string;

  public $entriesLength : number = 0;

  public $entryRef : any;

  public $link : string;

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

    this.location.replaceState(`/general-payment/t/${this.pslug}/entries`);

    this.gss.searchCleared.next(true);

    this.getAllEntry({}); }


  public trackByPaymentRef(idx : number , entry : GeneralPayment) : string {

      return entry.payment_reference;
  }

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.entries.systemType;

    this.title = data.entries.title;

    this.view = data.entries.view;

  	this.link = data.entries.link;

  	this.searchFilters = data.entries.searchFilters;

    this.gps.$systemType = this.systemType;

     this.route.queryParamMap.subscribe((params : ParamMap) => {

       let $p = this.route.snapshot.paramMap; 

       let $q = this.gas.paramProcessor(params , this)

       this.pslug = $p.get('payment');

       this.$link = `general-payment/t/${this.pslug}`;

       this.gps.ptype = this.pslug;

       this.isLoading = true;

        return this.getAllEntry($q); });

  }

  ngOnDestroy() : void {

     if (this.entriesSearchedOb != null) this.entriesSearchedOb.unsubscribe();

     if (this.clearSearchOb != null) this.clearSearchOb.unsubscribe();
      
     if (this.errorExistOb != null) this.errorExistOb.unsubscribe();
  }

  public getAllEntry(sq : SearchQuery) : void {

   this.gps.getAllEntry(sq)
  
    .subscribe((result : GeneralPayment[]) => {

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

    this.gas.deleteManyEntry(this , this.gps); }

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
