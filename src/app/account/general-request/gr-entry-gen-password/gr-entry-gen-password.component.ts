import { Component , Input , OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { GeneralRequest } from '../general-request';
import { GeneralRequestFormService } from '../gr-form.service';
import { GenerateUsernamePasswordService } from '../generate-username-password.service';

@Component({

  'selector' : 'app-gr-entry-gen-password',

  'templateUrl' : './gr-entry-gen-password.component.html',

  'styleUrls' : ['./gr-entry-gen-password.component.css']

})

export class GeneralRequestEntryGeneratePasswordComponent implements OnInit {


  constructor(private gups : GenerateUsernamePasswordService , private grfs : GeneralRequestFormService) { 

  }

  ngOnInit() : void {

    this.entryForm.addControl('password' , new FormControl('' , this.grfs.otherCtrls.password));
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @Input() public entry : GeneralRequest;


  public createNewCredentials(evt) : any {
    
    evt.stopPropagation();

    evt.preventDefault();

		let newPassword = Math.random().toString(36).substr(2, 9);

		this.entryForm.patchValue({'password' : newPassword });

    this.gups.createPassword$({'password' : newPassword})

      .subscribe();

  }

  get password() : FormControl {

    return this.entryForm.get('password') as FormControl;
  }

}
