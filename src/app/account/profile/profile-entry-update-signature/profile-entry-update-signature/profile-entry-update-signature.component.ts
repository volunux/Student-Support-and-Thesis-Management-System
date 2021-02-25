import { Component , Input , OnInit , ElementRef , ViewChildren , QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { General } from '../../general';
import { ProfileEntryUpdateSignatureFileControlService } from '../profile-entry-update-signature-file-control.service';
import { AttachmentUploadComponent } from '../../../../shared/module/attachment/attachment-upload/attachment-upload.component';

@Component({

  'selector' : 'app-profile-entry-update-signature',

  'templateUrl' : './profile-entry-update-signature.component.html',

  'styleUrls' : ['./profile-entry-update-signature.component.css'],

})

export class ProfileEntryUpdateSignatureComponent implements OnInit {

  constructor(public route : ActivatedRoute , public peusfcs : ProfileEntryUpdateSignatureFileControlService) {

  }

  public systemType : string = 'User';

  public viewWord : string = 'User';

  public systemGuideline : string = 'file';

  public title : string = 'Update Signature';

  public view : string = 'cppas';

  public link : string = 'profile';

  public $controls : { [key : string] : string }[];

  public $myFiles : { [key : string] : string | number }[] = [];

  public uploadConfigU : { [key : string] : string };

  public attachmentConfig : { [key : string] : string } = {

  	'name' : 'Image' ,

  	'type' : 'image'
  };

  public entryForm : FormGroup = new FormGroup({ 'upload': new FormControl('', [Validators.required]) });

  ngOnInit() : void {

    let data = this.route.snapshot.data;

    this.systemType = data.signature.systemType;

    this.systemGuideline = data.signature.systemGuideline;

    this.title = data.signature.title;

    this.view = data.signature.view;

    this.viewWord = data.signature.viewWord;

    this.link = data.signature.link;

    this.$controls = this.peusfcs.$controls;

    this.uploadConfigU = this.peusfcs.uploadConfigUrl;

  };

  public pushFile(file) {

    this.$myFiles.push(file);
  }

}
