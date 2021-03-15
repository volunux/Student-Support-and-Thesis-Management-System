import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { GeneralRequest } from '../general-request';
import { GeneralRequestService } from '../general-request.service';
import { GeneralRequestFormService } from '../gr-form.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gr-entry-update-field',

  'templateUrl' : './gr-entry-update-field.component.html',

  'styleUrls' : ['./gr-entry-update-field.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralRequestEntryUpdateFieldComponent implements OnInit {

  constructor(private grs : GeneralRequestService , private grfs : GeneralRequestFormService) { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public $link : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public entry : GeneralRequest;

  public eother : { [key : string] : any[] };

  public isOtherColAvailable : boolean = false;

  public otherOptions : FormControl = new FormControl('');

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
