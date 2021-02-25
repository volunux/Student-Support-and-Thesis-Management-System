import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Refund } from '../refund';

@Component({

  'selector' : 'app-stage-four',

  'templateUrl' : './stage-four.component.html',

  'styleUrls' : ['./stage-four.component.css']

})

export class StageFourComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {

    this.entryForm.patchValue({'stage' : this.currentStage , 'status' : this.entry.other_status_id});
  
  }

  @Input() public entry : Refund;

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('current-stage') public currentStage : number;


  get text() : FormControl {

    return this.entryForm.get('text') as FormControl;
  }

}
