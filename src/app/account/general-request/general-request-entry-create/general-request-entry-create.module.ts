import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';
import { RequestEntryCreateModule } from '../../../shared/component/request-entry-create/request-entry-create.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralRequestEntryCreateRoutingModule } from './general-request-entry-create-routing.module';

import { GeneralRequestEntryCreateComponent } from './general-request-entry-create/general-request-entry-create.component';
import { GeneralRequestEntryCreateHomepageComponent } from './general-request-entry-create-homepage/general-request-entry-create-homepage.component';

import { GeneralRequestEntryCreateFormService } from './general-request-entry-create-form.service';
import { GeneralRequestEntryCreateService } from './general-request-entry-create.service';


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
