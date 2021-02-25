import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InternalTwoRoutingModule } from './internal-two-routing.module';

import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../shared/module/simples/simples.module';

import { InternalTwoService } from './internal-two.service';
import { InternalTwoFormService } from './internal-two-form.service';

import { InternalTwoEntryDeleteAllComponent } from './internal-two-entry-delete-all/internal-two-entry-delete-all.component';
import { InternalTwoEntryDeleteComponent } from './internal-two-entry-delete/internal-two-entry-delete.component';
import { InternalTwoEntryUpdateComponent } from './internal-two-entry-update/internal-two-entry-update.component';
import { InternalTwoEntryDetailComponent } from './internal-two-entry-detail/internal-two-entry-detail.component';
import { InternalTwoEntryCreateComponent } from './internal-two-entry-create/internal-two-entry-create.component';
import { InternalTwoHomepageComponent } from './internal-two-homepage/internal-two-homepage.component';
import { InternalTwoDashboardComponent } from './internal-two-dashboard/internal-two-dashboard.component';
import { InternalTwoEntryValidatorComponent } from './internal-two-entry-validator/internal-two-entry-validator.component';
import { InternalTwoEntriesComponent } from './internal-two-entries/internal-two-entries.component';
import { InternalTwoFormInputComponent } from './internal-two-form-input/internal-two-form-input.component';


@NgModule({

  declarations: [

  InternalTwoEntryDeleteAllComponent,
  InternalTwoEntryDeleteComponent,
  InternalTwoEntryUpdateComponent,
  InternalTwoEntryDetailComponent,
  InternalTwoEntryCreateComponent,
  InternalTwoHomepageComponent,
  InternalTwoDashboardComponent,
  InternalTwoEntryValidatorComponent,
  InternalTwoEntriesComponent,
  InternalTwoFormInputComponent

  ],
  
  imports: [
    CommonModule,
    InternalTwoRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    GeneralInternalModule,
    SimplesModule
  ],

  providers : [

    InternalTwoFormService,
    InternalTwoService
  ]

})

export class InternalTwoModule { 

}
