import { Component , ElementRef , Input , OnInit , ViewChild } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { GeneralRequest } from '../general-request';
import { Credentials } from '../credentials';
import { GeneralRequestFormService } from '../gr-form.service';
import { GenerateUsernamePasswordService } from '../generate-username-password.service';
import { fadeAnimation } from '../../../animations';

@Component({

  'selector' : 'app-gr-entry-generate-u-p',

  'templateUrl' : './gr-entry-generate-u-p.component.html',

  'styleUrls' : ['./gr-entry-generate-u-p.component.css'] ,

  'animations' : [fadeAnimation]

})

export class GeneralRequestEntryGenerateUsernamePasswordComponent implements OnInit {

  constructor(private gups : GenerateUsernamePasswordService , private grfs : GeneralRequestFormService) { 

  }

  ngOnInit() : void {

    this.entryForm.addControl('username' , new FormControl('' , this.grfs.otherCtrls.username));

    this.entryForm.addControl('password' , new FormControl('' , this.grfs.otherCtrls.password));
  
  }

  @Input('system-type') public systemType : string;

  @Input('entry-form') public entryForm : FormGroup;

  @ViewChild('proposedCredential') public proposedCredential : ElementRef;

  @Input() public entry : GeneralRequest;


  public createNewCredentials(evt) : any {
    
    evt.stopPropagation();

    evt.preventDefault();

    let proposed = this.proposedCredential.nativeElement.value;

      this.gups.createUsernamePassword$({'username' : proposed , 'user' : this.entry.author._id , 'entry' : this.entry._id})

        .subscribe((result : { [key : string] : Credentials }) => {

          if (result != null && result.created == true) {

          let data = result.$data; 

            this.entryForm.patchValue({'username' : data.username , 'password' : data.password }); } });

  }

  get username() : FormControl {

    return this.entryForm.get('username') as FormControl;
  }

  get password() : FormControl {

    return this.entryForm.get('password') as FormControl;
  }

}
