import { Component , Input , OnInit , ElementRef , ViewChildren , QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { General } from '../../general';
import { ProfileEntryUpdatePhotoFileControlService } from '../profile-entry-update-photo-file-control.service';
import { AttachmentUploadComponent } from '../../../../shared/module/attachment/attachment-upload/attachment-upload.component';

@Component({

  'selector' : 'app-profile-entry-update-photo',

  'templateUrl' : './profile-entry-update-photo.component.html',

  'styleUrls' : ['./profile-entry-update-photo.component.css'],

})

export class ProfileEntryUpdatePhotoComponent implements OnInit {

  constructor(public route : ActivatedRoute , public peusfcs : ProfileEntryUpdatePhotoFileControlService) {

  }

  public systemType : string = 'User';

  public viewWord : string = 'User';

  public systemGuideline : string = 'file';

  public title : string = 'Update Photo';

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

    this.systemType = data.photo.systemType;

    this.systemGuideline = data.photo.systemGuideline;

    this.title = data.photo.title;

    this.view = data.photo.view;

    this.viewWord = data.photo.viewWord;

    this.link = data.photo.link;

    this.$controls = this.peusfcs.$controls;

    this.uploadConfigU = this.peusfcs.uploadConfigUrl;

  };

  public pushFile(file) {

    this.$myFiles.push(file);
  }

}
