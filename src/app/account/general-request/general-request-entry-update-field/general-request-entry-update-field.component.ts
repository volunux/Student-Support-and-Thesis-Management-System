import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { GeneralRequest } from '../general-request';
import { GeneralRequestService } from '../general-request.service';
import { GeneralRequestFormService } from '../general-request-form.service';

@Component({

  'selector' : 'app-general-request-entry-update-field',

  'templateUrl' : './general-request-entry-update-field.component.html',

  'styleUrls' : ['./general-request-entry-update-field.component.css']

})

export class GeneralRequestEntryUpdateFieldComponent implements OnInit {

  constructor(private grs : GeneralRequestService , private grfs : GeneralRequestFormService) { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public entry : GeneralRequest;

  public estatuses : { [key : string] : any }[];

  public isOtherColAvailable : boolean = false;

  public eother : { [key : string] : any };

  public otherOptions : FormControl = new FormControl('');

  @Output('on-submit-btn') public setSubmitButton : EventEmitter<boolean> = new EventEmitter<boolean>(); 


  public otherCol() : void {

    this.grs.status()

      .subscribe((result : {[key : string] : any}) => {

        if (result != null) {

          this.isOtherColAvailable = true;

           this.estatuses = result.Status;

          this.eother = {'Status' : result.Status };

          this.setSubmitButton.emit(true);

          this.grfs.createPermanent(this.eother , this.entryForm); } });

  }

  get status() : FormControl {

  	return this.entryForm.get('status') as FormControl;
  }

  get text() : FormControl {

  	return this.entryForm.get('text') as FormControl;
  }

}
