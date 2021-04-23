import { Component , EventEmitter , Input , OnInit , Output , ViewEncapsulation } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { General } from '../general';
import { GeneralMessageTemplate } from '../general-message-template';
import { nullRemover , checkFormChanges } from '../../../services/others';
import { GeneralMessageTemplateEntryChangeService } from '../gmt-entry-change.service';
import { fadeAnimation } from '../../../../animations';

import "../../../../../assets/js/froala_editor.min.js";
import "../../../../../assets/js/plugins/align.min.js";
import "../../../../../assets/js/plugins/colors.min.js";
import "../../../../../assets/js/plugins/entities.min.js";
import "../../../../../assets/js/plugins/fullscreen.min.js";
import "../../../../../assets/js/plugins/font_family.min.js";
import "../../../../../assets/js/plugins/font_size.min.js";
import "../../../../../assets/js/plugins/line_breaker.min.js";
import "../../../../../assets/js/plugins/line_height.min.js";
import "../../../../../assets/js/plugins/inline_style.min.js";
import "../../../../../assets/js/plugins/inline_class.min.js";
import "../../../../../assets/js/plugins/code_view.min.js";
import "../../../../../assets/js/plugins/forms.min.js";
import "../../../../../assets/js/plugins/special_characters.min.js";
import "../../../../../assets/js/plugins/save.min.js";
import "../../../../../assets/js/plugins/print.min.js";
import "../../../../../assets/js/plugins/char_counter.min.js";
import "../../../../../assets/js/plugins/word_paste.min.js";
import "../../../../../assets/js/plugins/lists.min.js";
import "../../../../../assets/js/plugins/paragraph_style.min.js";
import "../../../../../assets/js/plugins/paragraph_format.min.js";
import "../../../../../assets/js/plugins/quote.min.js";

@Component({

  'selector' : 'app-gmt-entry-update',

  'templateUrl' : './gmt-entry-update.component.html',

  'styleUrls' : ['./gmt-entry-update.component.css'] ,

  'encapsulation' : ViewEncapsulation.None ,

  'animations' : [fadeAnimation]

})

export class GeneralMessageTemplateEntryUpdateComponent implements OnInit {

  constructor(private gmtecs : GeneralMessageTemplateEntryChangeService) { 

  	this.entryChangesOb = this.gmtecs.isEntryChanged$

  		.subscribe((updated : boolean) => {

  				if (updated == false) {

 					this.isFormSubmitted = false;

 					this.isFormProcessing = false; }

  				else if (updated == true) {

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

  @Input('e-others') public eothers : any;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;
  

  @Output() public processEntry : EventEmitter<{ [key : string] : any }> = new EventEmitter<{ [key : string] : any }>(); 


  public isFormModified : boolean = false;

  public formMessage : string = 'Form will not be submitted and entry will not be updated if data are unchanged since when they were retrieved from the database.';

  public isFormProcessing : boolean = false;

  public isFormSubmitted : boolean = false;

  public entryChangesOb : Subscription;


  public confirmChanges(entry : General , body : General) : boolean {

    checkFormChanges(entry , body , this);

    return this.isFormModified;
  }


  public changeEntry(body : { [key : string] : any}) : void {

    this.isFormProcessing = true;

    this.confirmChanges(this.entry , body);

    if (this.isFormModified == true) {

      this.isFormSubmitted = true;

      this.processEntry.emit(body); }

    else { 

      this.isFormProcessing = false;

      false; }

  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }


}
