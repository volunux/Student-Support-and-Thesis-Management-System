import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../general/general.module';
import { SimplesModule } from '../../shared/module/simples/simples.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { GeneralServicesModule } from '../../shared/services/general-services.module';

import { GeneralPaymentRoutingModule } from './gp-routing.module';
import { GeneralPaymentHomepageComponent } from './gp-homepage/gp-homepage.component';
import { GeneralPaymentDashboardComponent } from './gp-dashboard/gp-dashboard.component';
import { GeneralPaymentEntryDashboardComponent } from './gp-entry-dashboard/gp-entry-dashboard.component';
import { GeneralPaymentEntriesComponent } from './gp-entries/gp-entries.component';
import { GeneralPaymentEntryCreateComponent } from './gp-entry-create/gp-entry-create.component';
import { GeneralPaymentEntryDetailComponent } from './gp-entry-detail/gp-entry-detail.component';
import { GeneralPaymentEntryCreateValidatorComponent } from './gp-entry-create-validator/gp-entry-create-validator.component';
import { GeneralPaymentEntryVerificationComponent } from './gp-entry-verification/gp-entry-verification.component';
import { GeneralPaymentEntryDeleteAllComponent } from './gp-entry-delete-all/gp-entry-delete-all.component';

import { GeneralPaymentService } from './general-payment.service';
import { GeneralPaymentFormService } from './gp-form.service';
import { GeneralPaymentEntryReceiptComponent } from './gp-entry-receipt/gp-entry-receipt.component';

@NgModule({

  declarations: [

  	GeneralPaymentHomepageComponent,
  	GeneralPaymentDashboardComponent,
  	GeneralPaymentEntryDashboardComponent,
  	GeneralPaymentEntriesComponent,
  	GeneralPaymentEntryCreateComponent,
  	GeneralPaymentEntryDetailComponent,
  	GeneralPaymentEntryCreateValidatorComponent,
  	GeneralPaymentEntryVerificationComponent,
  	GeneralPaymentEntryReceiptComponent,
    GeneralPaymentEntryDeleteAllComponent

  	],
  
  imports: [
  
    CommonModule,
    GeneralPaymentRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    PipesModule,
    SimplesModule,
    GeneralServicesModule
  ] ,

  providers : [

		GeneralPaymentService,
		GeneralPaymentFormService
  ]

})

export class GeneralPaymentModule { 

}
