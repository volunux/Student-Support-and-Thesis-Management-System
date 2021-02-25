import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../../general/general.module';
import { RequestEntryCreateModule } from '../../../shared/component/request-entry-create/request-entry-create.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';

import { RefundEntryCreateRoutingModule } from './refund-entry-create-routing.module';
import { RefundEntryCreateComponent } from './refund-entry-create/refund-entry-create.component';
import { RefundEntryCreateHomepageComponent } from './refund-entry-create-homepage/refund-entry-create-homepage.component';

import { RefundEntryCreateService } from './refund-entry-create.service';
import { RefundEntryCreateFormService } from './refund-entry-create-form.service';

@NgModule({

  declarations: [

  RefundEntryCreateComponent,
  RefundEntryCreateHomepageComponent

  ],
  
  imports: [
    CommonModule,
    RefundEntryCreateRoutingModule,
    RequestEntryCreateModule,
    GeneralModule
  ],

  providers : [

  	RefundEntryCreateService,
  	RefundEntryCreateFormService
  ]

})

export class RefundEntryCreateModule { 

}
