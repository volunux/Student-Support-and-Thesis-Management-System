import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { User } from '../../../interfaces/user';
import { General } from '../../../interfaces/general';
import { fadeAnimation } from '../../../../animations';

@Component({

  'selector' : 'app-user-other-field',

  'templateUrl' : './user-other-field.component.html',

  'styleUrls' : ['./user-other-field.component.css'] ,

  'animations' : [fadeAnimation]

})

export class UserOtherFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() : void {

    console.log('Whats going on?');

    console.log(this.generalOthers);

    console.log('What?');
  	
  }

  @Input('no-edit') public noEdit : boolean;

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input('general-others') public generalOthers : General;

  @Input() public entry : User;

  get about() : FormControl {

    return this.entryForm.get('about') as FormControl;
  }

  get faculty() : FormControl {

    return this.entryForm.get('faculty') as FormControl;
  }

  get department() : FormControl {

    return this.entryForm.get('department') as FormControl;
  }

  get level() : FormControl {

    return this.entryForm.get('level') as FormControl;
  }

  get country() : FormControl {

    return this.entryForm.get('country') as FormControl;
  }

  get unit() : FormControl {

    return this.entryForm.get('unit') as FormControl;
  }

  get status() : FormControl {

    return this.entryForm.get('status') as FormControl;
  }

  get role() : FormControl {

    return this.entryForm.get('role') as FormControl;
  }

  get matriculation_number() : FormControl {

    return this.entryForm.get('matriculation_number') as FormControl;
  }

  get identity_number() : FormControl {

    return this.entryForm.get('identity_number') as FormControl;
  }

  get jamb_registration_number() : FormControl {

    return this.entryForm.get('jamb_registration_number') as FormControl;
  }

}
