import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InternalThreeRoutingModule } from './internal-three-routing.module';

import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../shared/module/general-all/general-all.module';
import { GeneralInternalConversationModule } from '../../../shared/module/gi-chat/gi-chat.module';
import { SimplesModule } from '../../../shared/module/simples/simples.module';

import { InternalThreeService } from './internal-three.service';
import { InternalThreeFormService } from './internal-three-form.service';

import { InternalThreeEntryDeleteAllComponent } from './internal-three-entry-delete-all/internal-three-entry-delete-all.component';
import { InternalThreeEntryDeleteComponent } from './internal-three-entry-delete/internal-three-entry-delete.component';
import { InternalThreeEntryUpdateComponent } from './internal-three-entry-update/internal-three-entry-update.component';
import { InternalThreeEntryDetailComponent } from './internal-three-entry-detail/internal-three-entry-detail.component';
import { InternalThreeHomepageComponent } from './internal-three-homepage/internal-three-homepage.component';
import { InternalThreeDashboardComponent } from './internal-three-dashboard/internal-three-dashboard.component';
import { InternalThreeEntryValidatorComponent } from './internal-three-entry-validator/internal-three-entry-validator.component';
import { InternalThreeEntriesComponent } from './internal-three-entries/internal-three-entries.component';
import { InternalThreeFormInputComponent } from './internal-three-form-input/internal-three-form-input.component';


@NgModule({

  declarations: [

  InternalThreeEntryDeleteAllComponent,
  InternalThreeEntryDeleteComponent,
  InternalThreeEntryUpdateComponent,
  InternalThreeEntryDetailComponent,
  InternalThreeHomepageComponent,
  InternalThreeDashboardComponent,
  InternalThreeEntryValidatorComponent,
  InternalThreeEntriesComponent,
  InternalThreeFormInputComponent

  ],
  
  imports: [
    CommonModule,
    InternalThreeRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    GeneralInternalConversationModule,
    SimplesModule
  ],

  providers : [

    InternalThreeFormService,
    InternalThreeService
  ]

})

export class InternalThreeModule { 

}
