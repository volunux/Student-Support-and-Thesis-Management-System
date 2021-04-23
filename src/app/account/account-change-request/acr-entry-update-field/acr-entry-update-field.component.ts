import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { AccountChangeRequest } from '../account-change-request';
import { AccountChangeRequestService } from '../account-change-request.service';
import { AccountChangeRequestFormService } from '../acr-form.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-acr-entry-update-field',

  'templateUrl' : './acr-entry-update-field.component.html',

  'styleUrls' : ['./acr-entry-update-field.component.css'] ,

  'animations' : [fadeAnimation]

})

export class AccountChangeRequestEntryUpdateFieldComponent implements OnInit {

  constructor(private grs : AccountChangeRequestService , private grfs : AccountChangeRequestFormService) { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public $link : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public entry : AccountChangeRequest;

  public eother : { [key : string] : any[] };

  public isOtherColAvailable : boolean = false;

  public isLoading : boolean = false;

  @Output('on-submit-btn') public setSubmitButton : EventEmitter<boolean> = new EventEmitter<boolean>(); 

  public otherCol() : void {

    this.isLoading = true;

    this.grs.status()

      .subscribe((result : {[key : string] : any[]}) => {

        if (result == null) {

          this.isLoading = false; }

        else if (result != null) {

          this.isLoading = false;

          this.isOtherColAvailable = true;

           this.eother = result;

          this.setSubmitButton.emit(true); } });

  }

  get text() : FormControl {

  	return this.entryForm.get('text') as FormControl;
  }

}
