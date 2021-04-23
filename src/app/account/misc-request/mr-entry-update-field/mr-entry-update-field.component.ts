import { Component , EventEmitter , Input , OnInit , Output } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { MiscRequest } from '../misc-request';
import { MiscRequestService } from '../misc-request.service';
import { MiscRequestFormService } from '../mr-form.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-mr-entry-update-field',

  'templateUrl' : './mr-entry-update-field.component.html',

  'styleUrls' : ['./mr-entry-update-field.component.css'] ,

  'animations' : [fadeAnimation]

})

export class MiscRequestEntryUpdateFieldComponent implements OnInit {

  constructor(private grs : MiscRequestService , private grfs : MiscRequestFormService) { 

  }

  ngOnInit() : void {
  
  }

  @Input('system-type') public systemType : string;

  @Input() public $link : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public entry : MiscRequest;

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
