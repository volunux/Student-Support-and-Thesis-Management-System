import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestChangeMessageTemplateTypeRoutingModule } from './rcmtt-routing.module';

import { GeneralModule } from '../../../../general/general.module';
import { GeneralServicesModule } from '../../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../../shared/module/simples/simples.module';

import { RequestChangeMessageTemplateTypeService } from './rcmtt.service';
import { RequestChangeMessageTemplateTypeFormService } from './rcmtt-form.service';

import { RequestChangeMessageTemplateTypeEntryDeleteAllComponent } from './rcmtt-entry-delete-all/rcmtt-entry-delete-all.component';
import { RequestChangeMessageTemplateTypeEntryDeleteComponent } from './rcmtt-entry-delete/rcmtt-entry-delete.component';
import { RequestChangeMessageTemplateTypeEntryUpdateComponent } from './rcmtt-entry-update/rcmtt-entry-update.component';
import { RequestChangeMessageTemplateTypeEntryDetailComponent } from './rcmtt-entry-detail/rcmtt-entry-detail.component';
import { RequestChangeMessageTemplateTypeEntryCreateComponent } from './rcmtt-entry-create/rcmtt-entry-create.component';
import { RequestChangeMessageTemplateTypeHomepageComponent } from './rcmtt-homepage/rcmtt-homepage.component';
import { RequestChangeMessageTemplateTypeDashboardComponent } from './rcmtt-dashboard/rcmtt-dashboard.component';
import { RequestChangeMessageTemplateTypeEntryValidatorComponent } from './rcmtt-entry-validator/rcmtt-entry-validator.component';
import { RequestChangeMessageTemplateTypeEntriesComponent } from './rcmtt-entries/rcmtt-entries.component';
import { RequestChangeMessageTemplateTypeFormInputComponent } from './rcmtt-form-input/rcmtt-form-input.component';


@NgModule({

  declarations: [

  RequestChangeMessageTemplateTypeEntryDeleteAllComponent,
  RequestChangeMessageTemplateTypeEntryDeleteComponent,
  RequestChangeMessageTemplateTypeEntryUpdateComponent,
  RequestChangeMessageTemplateTypeEntryDetailComponent,
  RequestChangeMessageTemplateTypeEntryCreateComponent,
  RequestChangeMessageTemplateTypeHomepageComponent,
  RequestChangeMessageTemplateTypeDashboardComponent,
  RequestChangeMessageTemplateTypeEntryValidatorComponent,
  RequestChangeMessageTemplateTypeEntriesComponent,
  RequestChangeMessageTemplateTypeFormInputComponent

  ],
  
  imports: [
    CommonModule,
    RequestChangeMessageTemplateTypeRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    GeneralInternalModule,
    SimplesModule
  ],

  providers : [

    RequestChangeMessageTemplateTypeFormService,
    RequestChangeMessageTemplateTypeService
  ]

})

export class RequestChangeMessageTemplateTypeModule { 

}
