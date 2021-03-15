import { Component , ElementRef , OnInit , ViewChild } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RefundLetterService } from '../refund-letter.service';
import { General } from '../general';
import { RefundLetter } from '../refund-letter';
import { ErrorMessagesService } from '../../../shared/services/error-messages.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-refund-letter-entry-detail',

  'templateUrl' : './refund-letter-entry-detail.component.html',

  'styleUrls' : ['./refund-letter-entry-detail.component.css'] ,

  'providers' : [ErrorMessagesService] ,

  'animations' : [fadeAnimation]

})

export class RefundLetterEntryDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private rls : RefundLetterService , public ems : ErrorMessagesService) { 

  }

  public systemType : string;

  public title : string;

  public view : string;

  public viewWord : string;

  public link : string;

  public $link : string;

  public entry : RefundLetter;

  public error : General;

  public isError : boolean = false

  private eslug : string;

  public isLoading : boolean = false;

  @ViewChild('datacontainer') dataContainer : ElementRef;

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.detail.systemType;

    this.title = data.detail.title;

    this.view = data.detail.view;    

    this.viewWord = data.detail.viewWord;

    this.link = data.detail.link;

    this.$link = data.detail.$link;

    this.rls.$systemType = this.systemType;

    this.route.paramMap

      .pipe(

          switchMap((params : ParamMap) => {

          	let $e = params.get('entry');

            this.isLoading = true;

            return this.rls.getEntryLetter($e); })
        )
          .subscribe((result : RefundLetter) => {

            if (result == null) {

              this.isLoading = false;

            	this.isError = true;

            	this.error = Object.assign({'resource' : `${this.systemType} Entry`} , this.ems.message); }

            else if (result != null) {

              this.isLoading = false;

              this.entry = result;

              if (result.letter != null && result.letter.main_body) this.dataContainer.nativeElement.innerHTML = result.letter.main_body;

              this.eslug = this.entry.slug; } });  
  }



}
