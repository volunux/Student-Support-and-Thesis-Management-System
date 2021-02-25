import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestTypeRoutingModule } from './request-type-routing.module';

import { GeneralModule } from '../../../../general/general.module';
import { GeneralServicesModule } from '../../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../../shared/module/simples/simples.module';

import { RequestTypeService } from './request-type.service';
import { RequestTypeFormService } from './request-type-form.service';

import { RequestTypeEntryDeleteAllComponent } from './request-type-entry-delete-all/request-type-entry-delete-all.component';
import { RequestTypeEntryDeleteComponent } from './request-type-entry-delete/request-type-entry-delete.component';
import { RequestTypeEntryUpdateComponent } from './request-type-entry-update/request-type-entry-update.component';
import { RequestTypeEntryDetailComponent } from './request-type-entry-detail/request-type-entry-detail.component';
import { RequestTypeEntryCreateComponent } from './request-type-entry-create/request-type-entry-create.component';
import { RequestTypeHomepageComponent } from './request-type-homepage/request-type-homepage.component';
import { RequestTypeDashboardComponent } from './request-type-dashboard/request-type-dashboard.component';
import { RequestTypeEntryValidatorComponent } from './request-type-entry-validator/request-type-entry-validator.component';
import { RequestTypeEntriesComponent } from './request-type-entries/request-type-entries.component';
import { RequestTypeFormInputComponent } from './request-type-form-input/request-type-form-input.component';


@NgModule({

  declarations: [

  RequestTypeEntryDeleteAllComponent,
  RequestTypeEntryDeleteComponent,
  RequestTypeEntryUpdateComponent,
  RequestTypeEntryDetailComponent,
  RequestTypeEntryCreateComponent,
  RequestTypeHomepageComponent,
  RequestTypeDashboardComponent,
  RequestTypeEntryValidatorComponent,
  RequestTypeEntriesComponent,
  RequestTypeFormInputComponent

  ],
  
  imports: [
    CommonModule,
    RequestTypeRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    GeneralInternalModule,
    SimplesModule
  ],

  providers : [

    RequestTypeFormService,
    RequestTypeService
  ]

})

export class RequestTypeModule { 

}
