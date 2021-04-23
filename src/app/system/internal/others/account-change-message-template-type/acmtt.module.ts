import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountChangeMessageTemplateTypeRoutingModule } from './acmtt-routing.module';

import { GeneralModule } from '../../../../general/general.module';
import { GeneralServicesModule } from '../../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../../shared/module/simples/simples.module';

import { AccountChangeMessageTemplateTypeService } from './acmtt.service';
import { AccountChangeMessageTemplateTypeFormService } from './acmtt-form.service';

import { AccountChangeMessageTemplateTypeEntryDeleteAllComponent } from './acmtt-entry-delete-all/acmtt-entry-delete-all.component';
import { AccountChangeMessageTemplateTypeEntryDeleteComponent } from './acmtt-entry-delete/acmtt-entry-delete.component';
import { AccountChangeMessageTemplateTypeEntryUpdateComponent } from './acmtt-entry-update/acmtt-entry-update.component';
import { AccountChangeMessageTemplateTypeEntryDetailComponent } from './acmtt-entry-detail/acmtt-entry-detail.component';
import { AccountChangeMessageTemplateTypeEntryCreateComponent } from './acmtt-entry-create/acmtt-entry-create.component';
import { AccountChangeMessageTemplateTypeHomepageComponent } from './acmtt-homepage/acmtt-homepage.component';
import { AccountChangeMessageTemplateTypeDashboardComponent } from './acmtt-dashboard/acmtt-dashboard.component';
import { AccountChangeMessageTemplateTypeEntryValidatorComponent } from './acmtt-entry-validator/acmtt-entry-validator.component';
import { AccountChangeMessageTemplateTypeEntriesComponent } from './acmtt-entries/acmtt-entries.component';
import { AccountChangeMessageTemplateTypeFormInputComponent } from './acmtt-form-input/acmtt-form-input.component';


@NgModule({

  declarations: [

  AccountChangeMessageTemplateTypeEntryDeleteAllComponent,
  AccountChangeMessageTemplateTypeEntryDeleteComponent,
  AccountChangeMessageTemplateTypeEntryUpdateComponent,
  AccountChangeMessageTemplateTypeEntryDetailComponent,
  AccountChangeMessageTemplateTypeEntryCreateComponent,
  AccountChangeMessageTemplateTypeHomepageComponent,
  AccountChangeMessageTemplateTypeDashboardComponent,
  AccountChangeMessageTemplateTypeEntryValidatorComponent,
  AccountChangeMessageTemplateTypeEntriesComponent,
  AccountChangeMessageTemplateTypeFormInputComponent

  ],
  
  imports: [
    CommonModule,
    AccountChangeMessageTemplateTypeRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    GeneralInternalModule,
    SimplesModule
  ],

  providers : [

    AccountChangeMessageTemplateTypeFormService,
    AccountChangeMessageTemplateTypeService
  ]

})

export class AccountChangeMessageTemplateTypeModule { 

}
