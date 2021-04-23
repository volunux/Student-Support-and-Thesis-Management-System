import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountChangeMessageTemplateRoutingModule } from './acmt-routing.module';

import { GeneralModule } from '../../../../general/general.module';
import { GeneralServicesModule } from '../../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../../shared/module/general-all/general-all.module';
import { GeneralMessageTemplateModule } from '../../../../shared/module/gmt/general-message-template.module';
import { SimplesModule } from '../../../../shared/module/simples/simples.module';

import { AccountChangeMessageTemplateService } from './acmt.service';
import { AccountChangeMessageTemplateFormService } from './acmt-form.service';

import { AccountChangeMessageTemplateEntryDeleteAllComponent } from './acmt-entry-delete-all/acmt-entry-delete-all.component';
import { AccountChangeMessageTemplateEntryDeleteComponent } from './acmt-entry-delete/acmt-entry-delete.component';
import { AccountChangeMessageTemplateEntryUpdateComponent } from './acmt-entry-update/acmt-entry-update.component';
import { AccountChangeMessageTemplateEntryDetailComponent } from './acmt-entry-detail/acmt-entry-detail.component';
import { AccountChangeMessageTemplateEntryCreateComponent } from './acmt-entry-create/acmt-entry-create.component';
import { AccountChangeMessageTemplateHomepageComponent } from './acmt-homepage/acmt-homepage.component';
import { AccountChangeMessageTemplateDashboardComponent } from './acmt-dashboard/acmt-dashboard.component';
import { AccountChangeMessageTemplateEntryValidatorComponent } from './acmt-entry-validator/acmt-entry-validator.component';
import { AccountChangeMessageTemplateEntriesComponent } from './acmt-entries/acmt-entries.component';
import { AccountChangeMessageTemplateFormInputComponent } from './acmt-form-input/acmt-form-input.component';


@NgModule({

  declarations: [

  AccountChangeMessageTemplateEntryDeleteAllComponent,
  AccountChangeMessageTemplateEntryDeleteComponent,
  AccountChangeMessageTemplateEntryUpdateComponent,
  AccountChangeMessageTemplateEntryDetailComponent,
  AccountChangeMessageTemplateEntryCreateComponent,
  AccountChangeMessageTemplateHomepageComponent,
  AccountChangeMessageTemplateDashboardComponent,
  AccountChangeMessageTemplateEntryValidatorComponent,
  AccountChangeMessageTemplateEntriesComponent,
  AccountChangeMessageTemplateFormInputComponent

  ],
  
  imports: [
    CommonModule,
    AccountChangeMessageTemplateRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    GeneralMessageTemplateModule,
    SimplesModule
  ],

  providers : [

    AccountChangeMessageTemplateFormService,
    AccountChangeMessageTemplateService
  ]

})

export class AccountChangeMessageTemplateModule { 

}
