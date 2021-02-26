import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';
import { RequestEntryCreateModule } from '../../../shared/component/request-entry-create/request-entry-create.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralRequestEntryCreateRoutingModule } from './gr-entry-create-routing.module';

import { GeneralRequestEntryCreateComponent } from './gr-entry-create/gr-entry-create.component';
import { GeneralRequestEntryCreateHomepageComponent } from './gr-entry-create-homepage/gr-entry-create-homepage.component';

import { GeneralRequestEntryCreateFormService } from './gr-entry-create-form.service';
import { GeneralRequestEntryCreateService } from './gr-entry-create.service';


@NgModule({

  declarations: [

  GeneralRequestEntryCreateComponent,
  GeneralRequestEntryCreateHomepageComponent

  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralRequestEntryCreateRoutingModule,
    RequestEntryCreateModule,
    GeneralModule
  ],

  providers : [

  	GeneralRequestEntryCreateService,
  	GeneralRequestEntryCreateFormService
  ]

})

export class GeneralRequestEntryCreateModule { 

}
