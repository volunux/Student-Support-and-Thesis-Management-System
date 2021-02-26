import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../../general/general.module';
import { AttachmentModule } from '../../../shared/module/attachment/attachment.module';
import { GuidelineModule } from '../../../shared/module/guideline/guideline.module';

import { ProfileEntryUpdateSignatureRoutingModule } from './p-entry-update-s-routing.module';
import { ProfileEntryUpdateSignatureComponent } from './p-entry-update-s/p-entry-update-s.component';

import { ProfileEntryUpdateSignatureFileControlService } from './p-entry-update-s-file-control.service';
import { ProfileEntryUpdateSignatureHomepageComponent } from './p-entry-update-s-home/p-entry-update-s-home.component';

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
