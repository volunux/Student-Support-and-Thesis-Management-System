import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { GeneralRequest } from '../general-request';
import { RequestEntryMessageTemplateService } from '../r-e-message-template.service';
import { RequestEntryMessageTemplateFormService } from '../r-e-message-template-form.service';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-request-entry-message-template',

  'templateUrl' : './request-entry-message-template.component.html',

  'styleUrls' : ['./request-entry-message-template.component.css'] ,

  'animations' : [fadeAnimation]

})

export class RequestEntryMessageTemplateComponent implements OnInit {

  constructor(private remts : RequestEntryMessageTemplateService , private remtfs : RequestEntryMessageTemplateFormService) { 

  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public entry : GeneralRequest;

  @Input() public $link : string;

  public etemplates : { [key : string] : any }[];

  public isOtherColAvailable : boolean = false;

  public eother : { [key : string] : any };

  public prev_mtemplate : string;

  public isLoading : boolean = false;

  public templateNotAvailable : boolean = false;

  ngOnInit() : void {

    this.remts.$systemType = this.systemType;

    this.remts.$sa = this.$link;

    this.entryForm.addControl('messagetemplate' , new FormControl('' , this.remtfs.otherCtrls.request_message_template));
  }

  public getMessageTemplate(evt : HTMLSelectElement) : any{

   let mtemplate : string = ''; 

    if (evt.value == '') { return false; }

    if (evt.value == this.prev_mtemplate) { return false; }

    this.prev_mtemplate = evt.value;

    this.isLoading = true;

    this.remts.getEntry(+(evt.value))

      .subscribe((result) => {

        if (result == null) { 

          this.isLoading = false; }

        else if (result != null) {

        let entry = result;

        this.isLoading = false;

        this.entryForm.patchValue({'text' : entry.body}); } })

  }

  public otherCol() : void {

    this.isLoading = true;

    this.templateNotAvailable = false;

    this.remts.getEntries()

      .subscribe((result : {[key : string] : any}) => {

        if (result == null) {

          this.isLoading = false; 

          this.templateNotAvailable = true; }

        else if (result != null) {

          this.isLoading = false;

          this.isOtherColAvailable = true;

          this.etemplates = result.MessageTemplate;

          this.eother = {'MessageTemplate' : result.MessageTemplate };

          this.remtfs.createPermanent(this.eother , this.entryForm); } });

  }

  get request_message_template() : FormControl {

    return this.entryForm.get('messagetemplate') as FormControl;
  }

}
