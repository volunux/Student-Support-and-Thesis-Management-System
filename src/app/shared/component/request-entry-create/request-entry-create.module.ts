import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AttachmentModule } from '../../module/attachment/attachment.module';
import { GuidelineModule } from '../../module/guideline/guideline.module';
import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../services/general-services.module';

import { RequestEntryCreateComponent } from './request-entry-create/request-entry-create.component';
import { RequestEntryCreateValidatorComponent } from './request-entry-create-validator/request-entry-create-validator.component';

import { RequestEntryCreateFormService } from './request-entry-create-form.service';
import { RequestEntryCreateService } from './request-entry-create.service';

@NgModule({

  declarations: [

  	RequestEntryCreateComponent,
  	RequestEntryCreateValidatorComponent

  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    AttachmentModule,
    GuidelineModule,
    GeneralModule,
    GeneralServicesModule
  ] ,

  providers : [

		RequestEntryCreateFormService,
    RequestEntryCreateService
  ],

  exports : [

    RequestEntryCreateComponent
  ]

})

export class RequestEntryCreateModule { 

}
