import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ReplyCreateService } from '../reply-create.service';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-entry-reply-create',

  'templateUrl' : './entry-reply-create.component.html',

  'styleUrls' : ['./entry-reply-create.component.css'] ,

  'animations' : [fadeAnimation]

})

export class EntryReplyCreateComponent implements OnInit {

  constructor(private rcs : ReplyCreateService) { 

  	this.entryCreatedOb = this.rcs.isEntryCreated$

  		.subscribe((created : boolean) => {

  				if (created == false) {

 					this.isFormSubmitted = false;

 					this.isFormProcessing = false; }

  				else if (created == true) {

 					this.isFormSubmitted = false; } });

  }

  ngOnInit() : void {
  
  }

  ngOnDestroy() : void {

    this.entryCreatedOb.unsubscribe();
  }

  @Input('system-type') public systemType : string;

  @Input() public view : string;

  @Input() public entry : { [key : string] : any };

  @Input() public comment : { [key : string] : any };

  @Input('entry-create-form') public entryCreateForm : FormGroup;

  @Output() public processEntry : EventEmitter<{ [key : string] : any }> = new EventEmitter<{ [key : string] : any }>(); 


  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false;

  public entryCreatedOb : Subscription;


  public createEntry(body : { [key : string] : any}) : void {

    this.isFormSubmitted = true;

    this.isFormProcessing = true;

    this.processEntry.emit(body);

  }

  get text() : FormControl {

  	return this.entryCreateForm.get('text') as FormControl;
  }

  get comment_author_name() : FormControl {

  	return this.entryCreateForm.get('comment_author_name') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryCreateForm.valid;
  }

}
