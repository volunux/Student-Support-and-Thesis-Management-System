import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Refund } from '../refund';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-stage-one-two-five',

  'templateUrl' : './stage-one-two-five.component.html',

  'styleUrls' : ['./stage-one-two-five.component.css'] ,

  'animations' : [fadeAnimation]

})

export class StageOneTwoFiveComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() : void {

    this.entryForm.patchValue({'stage' : this.currentStage});
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('current-stage') public currentStage : number;

  @Input() public entry : Refund;

  @Input() public $link : string;

  @Input('entry-other') public eother : {[key : string] : any[]};

  get text() : FormControl {

    return this.entryForm.get('text') as FormControl;
  }

}
