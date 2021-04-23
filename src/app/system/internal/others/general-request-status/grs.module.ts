import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralRequestStatusRoutingModule } from './grs-routing.module';

import { GeneralModule } from '../../../../general/general.module';
import { GeneralServicesModule } from '../../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../../shared/module/simples/simples.module';

import { GeneralRequestStatusService } from './grs.service';
import { GeneralRequestStatusFormService } from './grs-form.service';

import { GeneralRequestStatusEntryDeleteAllComponent } from './grs-entry-delete-all/grs-entry-delete-all.component';
import { GeneralRequestStatusEntryDeleteComponent } from './grs-entry-delete/grs-entry-delete.component';
import { GeneralRequestStatusEntryUpdateComponent } from './grs-entry-update/grs-entry-update.component';
import { GeneralRequestStatusEntryDetailComponent } from './grs-entry-detail/grs-entry-detail.component';
import { GeneralRequestStatusEntryCreateComponent } from './grs-entry-create/grs-entry-create.component';
import { GeneralRequestStatusHomepageComponent } from './grs-homepage/grs-homepage.component';
import { GeneralRequestStatusDashboardComponent } from './grs-dashboard/grs-dashboard.component';
import { GeneralRequestStatusEntryValidatorComponent } from './grs-entry-validator/grs-entry-validator.component';
import { GeneralRequestStatusEntriesComponent } from './grs-entries/grs-entries.component';
import { GeneralRequestStatusFormInputComponent } from './grs-form-input/grs-form-input.component';


@NgModule({

  declarations: [

  GeneralRequestStatusEntryDeleteAllComponent,
  GeneralRequestStatusEntryDeleteComponent,
  GeneralRequestStatusEntryUpdateComponent,
  GeneralRequestStatusEntryDetailComponent,
  GeneralRequestStatusEntryCreateComponent,
  GeneralRequestStatusHomepageComponent,
  GeneralRequestStatusDashboardComponent,
  GeneralRequestStatusEntryValidatorComponent,
  GeneralRequestStatusEntriesComponent,
  GeneralRequestStatusFormInputComponent

  ],
  
  imports: [
    CommonModule,
    GeneralRequestStatusRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    GeneralInternalModule,
    SimplesModule
  ],

  providers : [

    GeneralRequestStatusFormService,
    GeneralRequestStatusService
  ]

})

export class GeneralRequestStatusModule { 

}
