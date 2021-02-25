import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InternalFourRoutingModule } from './internal-four-routing.module';

import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../shared/module/general-all/general-all.module';
import { SimplesModule } from '../../../shared/module/simples/simples.module';

import { InternalFourService } from './internal-four.service';
import { InternalFourFormService } from './internal-four-form.service';

import { InternalFourEntryDeleteAllComponent } from './internal-four-entry-delete-all/internal-four-entry-delete-all.component';
import { InternalFourHomepageComponent } from './internal-four-homepage/internal-four-homepage.component';
import { InternalFourDashboardComponent } from './internal-four-dashboard/internal-four-dashboard.component';

import { InternalFourEntriesComponent } from './internal-four-entries/internal-four-entries.component';


@NgModule({

  declarations: [

  InternalFourEntryDeleteAllComponent,
  InternalFourHomepageComponent,
  InternalFourDashboardComponent,
  InternalFourEntriesComponent,

  ],
  
  imports: [
    CommonModule,
    InternalFourRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    SimplesModule
  ],

  providers : [

    InternalFourFormService,
    InternalFourService
  ]

})

export class InternalFourModule { 

}
