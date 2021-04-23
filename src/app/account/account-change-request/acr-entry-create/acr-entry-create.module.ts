import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../../general/general.module';
import { RequestEntryCreateModule } from '../../../shared/component/request-entry-create/request-entry-create.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { AccountChangeRequestEntryCreateRoutingModule } from './acr-entry-create-routing.module';

import { AccountChangeRequestEntryCreateComponent } from './acr-entry-create/acr-entry-create.component';
import { AccountChangeRequestEntryCreateHomepageComponent } from './acr-entry-create-homepage/acr-entry-create-homepage.component';

import { AccountChangeRequestEntryCreateFormService } from './acr-entry-create-form.service';
import { AccountChangeRequestEntryCreateService } from './acr-entry-create.service';


@NgModule({

  declarations: [

  AccountChangeRequestEntryCreateComponent,
  AccountChangeRequestEntryCreateHomepageComponent

  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountChangeRequestEntryCreateRoutingModule,
    RequestEntryCreateModule,
    GeneralModule
  ],

  providers : [

  	AccountChangeRequestEntryCreateService,
  	AccountChangeRequestEntryCreateFormService
  ]

})

export class AccountChangeRequestEntryCreateModule { 

}
