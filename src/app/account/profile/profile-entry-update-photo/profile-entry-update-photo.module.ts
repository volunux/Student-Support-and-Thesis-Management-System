import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../../general/general.module';
import { AttachmentModule } from '../../../shared/module/attachment/attachment.module';
import { GuidelineModule } from '../../../shared/module/guideline/guideline.module';

import { ProfileEntryUpdatePhotoRoutingModule } from './profile-entry-update-photo-routing.module';
import { ProfileEntryUpdatePhotoComponent } from './profile-entry-update-photo/profile-entry-update-photo.component';

import { ProfileEntryUpdatePhotoFileControlService } from './profile-entry-update-photo-file-control.service';
import { ProfileEntryUpdatePhotoHomepageComponent } from './p-entry-update-p-home/p-entry-update-p-home.component';

@NgModule({
  declarations: [

  	ProfileEntryUpdatePhotoComponent,

  	ProfileEntryUpdatePhotoHomepageComponent
  ],
  
  imports: [
    CommonModule,
    ProfileEntryUpdatePhotoRoutingModule,
    GeneralModule,
    AttachmentModule,
    GuidelineModule
  ],

  providers : [

    ProfileEntryUpdatePhotoFileControlService
  ]

})

export class ProfileEntryUpdatePhotoModule { 

}
