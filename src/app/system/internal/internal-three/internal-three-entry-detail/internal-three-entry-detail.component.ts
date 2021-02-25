import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { InternalThree } from '../internal-three';
import { General } from '../general';
import { InternalThreeService } from '../internal-three.service';
import { ErrorMessagesService } from '../../../../shared/services/error-messages.service';


@Component({

  'selector' : 'app-internal-three-entry-detail',

  'templateUrl' : './internal-three-entry-detail.component.html',

  'styleUrls' : ['./internal-three-entry-detail.component.css'] ,

  'providers' : [ErrorMessagesService]

})

export class InternalThreeEntryDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private ems : ErrorMessagesService , private its : InternalThreeService ) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  public entry : InternalThree;

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

  	this.its.$systemType = this.systemType;

  	this.its.$sa = this.$link;

    this.route.paramMap.pipe(

    	switchMap((params : ParamMap) => {

          let $e = params.get('entry');

    			return this.its.getEntry($e);	})
    	)
        .subscribe((result) => { 

        if (result == null) { 

          this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); 

          this.isError = true; }

        else if (result != null) {

          this.entry = result; } });
  }

}
