import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RequestType } from '../request-type';
import { General } from '../general';
import { RequestTypeService } from '../request-type.service';
import { ErrorMessagesService } from '../../../../../shared/services/error-messages.service';


@Component({

  'selector' : 'app-request-type-entry-detail',

  'templateUrl' : './request-type-entry-detail.component.html',

  'styleUrls' : ['./request-type-entry-detail.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class RequestTypeEntryDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private ems : ErrorMessagesService , private rts : RequestTypeService ) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  public entry : RequestType;

  public error : General;

  public isError : boolean = false;

  ngOnInit() : void {

  	let data = this.route.snapshot.data;

  	this.systemType = data.detail.systemType;

  	this.title = data.detail.title;

  	this.view = data.detail.view;

  	this.viewWord = data.detail.viewWord;

  	this.link = data.detail.link;

  	this.$link = data.detail.$link;

  	this.rts.$systemType = this.systemType;

  	this.rts.$sa = this.$link;

    this.route.paramMap.pipe(

    	switchMap((params : ParamMap) => {

          let $e = params.get('entry');

    			return this.rts.getEntry($e);	})
    	)
        .subscribe((result) => { 

        if (result == null) { 

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

          this.isError = true; }

        else if (result != null) {

          this.entry = result; } });
  }

}
