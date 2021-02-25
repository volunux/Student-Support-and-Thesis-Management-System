import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InternalOneRoutingModule } from './internal-one-routing.module';

import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../shared/module/simples/simples.module';

import { InternalOneService } from './internal-one.service';
import { InternalOneFormService } from './internal-one-form.service';

import { InternalOneEntryDeleteAllComponent } from './internal-one-entry-delete-all/internal-one-entry-delete-all.component';
import { InternalOneEntryDeleteComponent } from './internal-one-entry-delete/internal-one-entry-delete.component';
import { InternalOneEntryUpdateComponent } from './internal-one-entry-update/internal-one-entry-update.component';
import { InternalOneEntryDetailComponent } from './internal-one-entry-detail/internal-one-entry-detail.component';
import { InternalOneEntryCreateComponent } from './internal-one-entry-create/internal-one-entry-create.component';
import { InternalOneHomepageComponent } from './internal-one-homepage/internal-one-homepage.component';
import { InternalOneDashboardComponent } from './internal-one-dashboard/internal-one-dashboard.component';
import { InternalOneEntryValidatorComponent } from './internal-one-entry-validator/internal-one-entry-validator.component';
import { InternalOneEntriesComponent } from './internal-one-entries/internal-one-entries.component';
import { InternalOneFormInputComponent } from './internal-one-form-input/internal-one-form-input.component';


@NgModule({

  declarations: [

  InternalOneEntryDeleteAllComponent,
  InternalOneEntryDeleteComponent,
  InternalOneEntryUpdateComponent,
  InternalOneEntryDetailComponent,
  InternalOneEntryCreateComponent,
  InternalOneHomepageComponent,
  InternalOneDashboardComponent,
  InternalOneEntryValidatorComponent,
  InternalOneEntriesComponent,
  InternalOneFormInputComponent

  ],
  
  imports: [
    CommonModule,
    InternalOneRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    GeneralInternalModule,
    SimplesModule
  ],

  providers : [

    InternalOneFormService,
    InternalOneService
  ]

})

export class InternalOneModule { 

}
