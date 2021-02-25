import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { Refund } from '../refund';

@Component({

  'selector' : 'app-stage-one-two-five',

  'templateUrl' : './stage-one-two-five.component.html',

  'styleUrls' : ['./stage-one-two-five.component.css']

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

  @Input('entry-other') set eother (entries : {[key : string] : any[]}) {

   if (entries != null) {

     this.estatuses = entries.Status;
   }

  };

  public estatuses : { [key : string] : any }[];


  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
  }

  get text() : FormControl {

    return this.entryForm.get('text') as FormControl;
  }

}
