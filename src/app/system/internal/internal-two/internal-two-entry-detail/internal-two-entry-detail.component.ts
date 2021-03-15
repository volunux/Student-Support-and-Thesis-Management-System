import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { InternalTwo } from '../internal-two';
import { General } from '../general';
import { InternalTwoService } from '../internal-two.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';
import { fadeAnimation } from '../../../../animations';


@Component({

  'selector' : 'app-internal-two-entry-detail',

  'templateUrl' : './internal-two-entry-detail.component.html',

  'styleUrls' : ['./internal-two-entry-detail.component.css'] ,

  'providers' : [ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class InternalTwoEntryDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private ems : ErrorMessagesService , private its : InternalTwoService ) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  public entry : InternalTwo;

  public error : General;

  public isError : boolean = false;

  public isLoading : boolean = false;

  ngOnInit() : void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.detail.systemType;

  	this.title = data.detail.title;

  	this.view = data.detail.view;

  	this.viewWord = data.detail.viewWord;

  	this.link = data.detail.link;

  	this.$link = data.detail.$link;

  	this.its.$systemType = this.systemType;

  	this.its.$sa = this.$link;

    this.route.paramMap.pipe(

    	switchMap((params : ParamMap) => {

          let $e = params.get('entry');

          this.isLoading = true;

    			return this.its.getEntry($e);	})
    	)
        .subscribe((result) => { 

        if (result == null) {

          this.isLoading = false;

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

          this.isError = true; }

        else if (result != null) {

          this.isLoading = false;

          this.entry = result; } });
  }

}
