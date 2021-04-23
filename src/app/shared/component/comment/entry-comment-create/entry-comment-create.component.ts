import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommentCreateService } from '../comment-create.service';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-entry-comment-create',

  'templateUrl' : './entry-comment-create.component.html',

  'styleUrls' : ['./entry-comment-create.component.css'] ,

  'animations' : [fadeAnimation]

})

export class EntryCommentCreateComponent implements OnInit {

  constructor(private ccs : CommentCreateService) { 

  	this.entryCreatedOb = this.ccs.isEntryCreated$

  		.subscribe((created : boolean) => {

  				if (created == false) {

 					this.isFormSubmitted = false;

 					this.isFormProcessing = false; }

  				else if (created == true) {

 					this.isFormSubmitted = false; } });

  }

  @Input('system-type') public systemType : string;

  @Input() public view : string;

  @Input() public entry : { [key : string] : any };

  @Input('entry-create-form') public entryCreateForm : FormGroup;

  @Output() public processEntry : EventEmitter<{ [key : string] : any }> = new EventEmitter<{ [key : string] : any }>(); 


  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false;

  public entryCreatedOb : Subscription;


  ngOnInit() : void {
  
  }

  ngOnDestroy() : void {

    this.entryCreatedOb.unsubscribe();
  }

  public createEntry(body : { [key : string] : any}) : void {

    this.isFormSubmitted = true;

    this.isFormProcessing = true;

    this.processEntry.emit(body);

  }

  get text() : FormControl {

  	return this.entryCreateForm.get('text') as FormControl;
  }

  get isFormValid() : boolean {

    return this.entryCreateForm.valid;
  }

}
