import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../../general/general.module';
import { AttachmentModule } from '../../../shared/module/attachment/attachment.module';
import { GuidelineModule } from '../../../shared/module/guideline/guideline.module';

import { ProfileEntryUpdateSignatureRoutingModule } from './profile-entry-update-signature-routing.module';
import { ProfileEntryUpdateSignatureComponent } from './profile-entry-update-signature/profile-entry-update-signature.component';

import { ProfileEntryUpdateSignatureFileControlService } from './profile-entry-update-signature-file-control.service';
import { ProfileEntryUpdateSignatureHomepageComponent } from './profile-entry-update-signature-homepage/profile-entry-update-signature-homepage.component';

@NgModule({
  declarations: [

  	ProfileEntryUpdateSignatureComponent,

  	ProfileEntryUpdateSignatureHomepageComponent
  ],
  
  imports: [
    CommonModule,
    ProfileEntryUpdateSignatureRoutingModule,
    GeneralModule,
    AttachmentModule,
    GuidelineModule
  ],

  providers : [

    ProfileEntryUpdateSignatureFileControlService
  ]

})

export class ProfileEntryUpdateSignatureModule { 

}
