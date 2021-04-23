import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestChangeMessageTemplateRoutingModule } from './rcmt-routing.module';

import { GeneralModule } from '../../../../general/general.module';
import { GeneralServicesModule } from '../../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../../shared/module/simples/simples.module';

import { RequestChangeMessageTemplateService } from './rcmt.service';
import { RequestChangeMessageTemplateFormService } from './rcmt-form.service';

import { RequestChangeMessageTemplateEntryDeleteAllComponent } from './rcmt-entry-delete-all/rcmt-entry-delete-all.component';
import { RequestChangeMessageTemplateEntryDeleteComponent } from './rcmt-entry-delete/rcmt-entry-delete.component';
import { RequestChangeMessageTemplateEntryUpdateComponent } from './rcmt-entry-update/rcmt-entry-update.component';
import { RequestChangeMessageTemplateEntryDetailComponent } from './rcmt-entry-detail/rcmt-entry-detail.component';
import { RequestChangeMessageTemplateEntryCreateComponent } from './rcmt-entry-create/rcmt-entry-create.component';
import { RequestChangeMessageTemplateHomepageComponent } from './rcmt-homepage/rcmt-homepage.component';
import { RequestChangeMessageTemplateDashboardComponent } from './rcmt-dashboard/rcmt-dashboard.component';
import { RequestChangeMessageTemplateEntryValidatorComponent } from './rcmt-entry-validator/rcmt-entry-validator.component';
import { RequestChangeMessageTemplateEntriesComponent } from './rcmt-entries/rcmt-entries.component';
import { RequestChangeMessageTemplateFormInputComponent } from './rcmt-form-input/rcmt-form-input.component';


@NgModule({

  declarations: [

  RequestChangeMessageTemplateEntryDeleteAllComponent,
  RequestChangeMessageTemplateEntryDeleteComponent,
  RequestChangeMessageTemplateEntryUpdateComponent,
  RequestChangeMessageTemplateEntryDetailComponent,
  RequestChangeMessageTemplateEntryCreateComponent,
  RequestChangeMessageTemplateHomepageComponent,
  RequestChangeMessageTemplateDashboardComponent,
  RequestChangeMessageTemplateEntryValidatorComponent,
  RequestChangeMessageTemplateEntriesComponent,
  RequestChangeMessageTemplateFormInputComponent

  ],
  
  imports: [
    CommonModule,
    RequestChangeMessageTemplateRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    GeneralInternalModule,
    SimplesModule
  ],

  providers : [

    RequestChangeMessageTemplateFormService,
    RequestChangeMessageTemplateService
  ]

})

export class RequestChangeMessageTemplateModule { 

}
