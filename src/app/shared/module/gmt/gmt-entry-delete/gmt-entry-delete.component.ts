import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { General } from '../general';
import { GeneralMessageTemplate } from '../general-message-template';
import { GeneralMessageTemplateEntryChangeService } from '../gmt-entry-change.service';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-gmt-entry-delete',

  'templateUrl' : './gmt-entry-delete.component.html',

  'styleUrls' : ['./gmt-entry-delete.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralMessageTemplateEntryDeleteComponent implements OnInit {

  constructor(private gmtecs : GeneralMessageTemplateEntryChangeService) { 

  	this.entryChangesOb = this.gmtecs.isEntryChanged$

  		.subscribe((deleted : boolean) => {

  				if (deleted == false) {

 					this.isFormSubmitted = false;

 					this.isFormProcessing = false; }

  				else if (deleted == true) {

 					this.isFormSubmitted = false; } });
  }

  ngOnInit() : void {
  
  }

  ngOnDestroy() : void {

    if(this.entryChangesOb != null) this.entryChangesOb.unsubscribe();
  }

  @Input('system-type') public systemType : string;

  @Input('system-guideline') public systemGuideline : string;

  @Input() public view : string;

  @Input() public entry : GeneralMessageTemplate;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;
  

  @Output() public processEntry : EventEmitter<{ [key : string] : any }> = new EventEmitter<{ [key : string] : any }>(); 


  public isFormModified : boolean = false;

  public formMessage : string = 'Form will not be submitted and entry will not be deleted if data are unchanged since when they were retrieved from the database.';

  public isFormProcessing : boolean = false;

  public isFormSubmitted : boolean = false;

  public entryChangesOb : Subscription;


  public changeEntry(body : { [key : string] : any}) : boolean {

    let isConfirmed = confirm('Are you sure you want to proceed with this action?');

    if (isConfirmed) {

	    this.isFormSubmitted = true;

	    this.isFormProcessing = true;
			
			this.processEntry.emit(body); }

     else { return false };

  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }


}
