import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { General } from '../../../shared/interfaces/general';
import { Statistics } from '../statistics';
import { StatisticsService } from '../statistics.service';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-statistics-entries',

  'templateUrl' : './statistics-entries.component.html',

  'styleUrls' : ['./statistics-entries.component.css'] ,

  'providers' : [ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class StatisticsEntriesComponent implements OnInit {

  constructor(private route : ActivatedRoute , private sts : StatisticsService , private ems : ErrorMessagesService) { 

  }

  public systemType : string;

  public viewWord : string;

  public title : string;

  public view : string;

  public link : string;

  public $link : string;

  public entries : General;

  public error : { [key : string] : any };

  public $entryType : string;

  public isError : boolean = false;

  public isLoading : boolean = false;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.entries.systemType;

    this.title = data.entries.title;

    this.view = data.entries.view;

    this.viewWord = data.entries.viewWord;

    this.link = data.entries.link;

    this.$link = data.entries.$link;

    this.$entryType = data.entries.entryType;

    this.sts.$systemType = this.systemType;

    this.sts.$sa = this.$link;

    this.route.queryParamMap.subscribe((params : ParamMap) => {

      this.isLoading = true;

        return this.getAllEntry(); });

   }

  public getAllEntry() {

   this.sts.getAllEntry(this.$entryType)
  
    .subscribe((result : General) => {

      if (result == null) {

        this.isLoading = false;

        this.isError = true;

        this.error = Object.assign({'resource' : `${this.systemType} Entry or Entries`} , this.ems.message); }

      else if (result != null) {

        this.isLoading = false;

       this.entries = Object.values(result); } });
  }

}
