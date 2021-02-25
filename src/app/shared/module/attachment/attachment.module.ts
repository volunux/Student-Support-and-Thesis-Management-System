import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GeneralServicesModule } from '../../services/general-services.module';

import { AttachmentUploadComponent } from './attachment-upload/attachment-upload.component';
import { AttachmentUploadService } from './attachment-upload/attachment-upload.service';

@NgModule({

  declarations: [

    AttachmentUploadComponent
  ],

  imports: [
  
    CommonModule,
    ReactiveFormsModule,
    GeneralServicesModule,
    RouterModule.forChild([])
  ],

  providers : [

    AttachmentUploadService
  ],

  exports : [

    AttachmentUploadComponent
  ]

})

export class AttachmentModule { 

}
