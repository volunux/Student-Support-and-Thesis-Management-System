import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../services/general-services.module';
import { RequestEntryModule } from '../request-entry/request-entry.module';

import { RequestEntryMessageTemplateComponent } from './request-entry-message-template/request-entry-message-template.component';
import { RequestEntryMessageTemplateFormService } from './r-e-message-template-form.service';
import { RequestEntryMessageTemplateService } from './r-e-message-template.service';

@NgModule({
  
  declarations: [

    RequestEntryMessageTemplateComponent
  ],

  imports: [

    CommonModule,
    ReactiveFormsModule,
    GeneralServicesModule,
    GeneralModule,
    RequestEntryModule,
  ],

  providers : [

  	RequestEntryMessageTemplateFormService,
  	RequestEntryMessageTemplateService
  ] ,

  exports : [

    RequestEntryMessageTemplateComponent
  ]

})

export class RequestEntryMessageTemplateModule { 

}
