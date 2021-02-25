import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../services/general-services.module';

import { GeneralInternalConversationFormInputValidatorComponent } from './general-internal-conversation-form-input-validator/general-internal-conversation-form-input-validator.component';
import { GeneralInternalConversationFormInputComponent } from './general-internal-conversation-form-input/general-internal-conversation-form-input.component';

import { GeneralInternalConversationService } from './general-internal-conversation.service';
import { GeneralInternalConversationEntryChangeService } from './general-internal-conversation-entry-change.service';
import { GeneralInternalConversationFormService } from './general-internal-conversation-form.service';
import { GeneralInternalConversationEntryDetailComponent } from './general-internal-conversation-entry-detail/general-internal-conversation-entry-detail.component';
import { GeneralInternalConversationEntryUpdateComponent } from './general-internal-conversation-entry-update/general-internal-conversation-entry-update.component';
import { GeneralInternalConversationEntryDeleteComponent } from './general-internal-conversation-entry-delete/general-internal-conversation-entry-delete.component';

@NgModule({

  declarations: [

  GeneralInternalConversationFormInputValidatorComponent,
  GeneralInternalConversationFormInputComponent,
  GeneralInternalConversationEntryDetailComponent,
  GeneralInternalConversationEntryUpdateComponent,
  GeneralInternalConversationEntryDeleteComponent

  ],
  
  imports: [

    CommonModule,
    RouterModule.forChild([]),
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule
  ],

  providers : [

  	GeneralInternalConversationService,
  	GeneralInternalConversationEntryChangeService,
  	GeneralInternalConversationFormService
  ] ,

  exports : [

    GeneralInternalConversationEntryDetailComponent,
    GeneralInternalConversationEntryUpdateComponent,
    GeneralInternalConversationEntryDeleteComponent
  ]

})

export class GeneralInternalConversationModule { 

}
