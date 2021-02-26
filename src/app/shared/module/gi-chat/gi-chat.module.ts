import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../services/general-services.module';

import { GeneralInternalConversationFormInputValidatorComponent } from './gi-chat-form-input-validator/gi-chat-form-input-validator.component';
import { GeneralInternalConversationFormInputComponent } from './gi-chat-form-input/gi-chat-form-input.component';

import { GeneralInternalConversationService } from './gi-chat.service';
import { GeneralInternalConversationEntryChangeService } from './gi-chat-entry-change.service';
import { GeneralInternalConversationFormService } from './gi-chat-form.service';
import { GeneralInternalConversationEntryDetailComponent } from './gi-chat-entry-detail/gi-chat-entry-detail.component';
import { GeneralInternalConversationEntryUpdateComponent } from './gi-chat-entry-update/gi-chat-entry-update.component';
import { GeneralInternalConversationEntryDeleteComponent } from './gi-chat-entry-delete/gi-chat-entry-delete.component';

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
