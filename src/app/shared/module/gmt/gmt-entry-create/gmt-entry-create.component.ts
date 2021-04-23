import { Component , EventEmitter , Input , OnInit , Output , ViewEncapsulation } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
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

  'selector' : 'app-gmt-entry-create',

  'templateUrl' : './gmt-entry-create.component.html',

  'styleUrls' : ['./gmt-entry-create.component.css'] ,

  'encapsulation' : ViewEncapsulation.None ,

  'animations' : [fadeAnimation]

})

export class GeneralMessageTemplateEntryCreateComponent implements OnInit {

  constructor(private gmtecs : GeneralMessageTemplateEntryChangeService) { 

  	this.entryChangesOb = this.gmtecs.isEntryChanged$

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

    if(this.entryChangesOb != null) this.entryChangesOb.unsubscribe();
  }

  @Input('system-type') public systemType : string;

  @Input('system-guideline') public systemGuideline : string;

  @Input() public view : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('e-others') public eothers : any;

  @Input() public placeholder : any;

  @Input('no-edit') public noEdit : boolean;
  

  @Output() public processEntry : EventEmitter<{ [key : string] : any }> = new EventEmitter<{ [key : string] : any }>(); 


  public isFormSubmitted : boolean = false;

  public isFormProcessing : boolean = false;

  public entryChangesOb : Subscription;


  public createEntry(body : { [key : string] : any}) : void {

    this.isFormSubmitted = true;

    this.isFormProcessing = true;

    console.log(body);

    this.processEntry.emit(body);

  }

  get isFormValid() : boolean {

    return this.entryForm.valid;
  }


}
