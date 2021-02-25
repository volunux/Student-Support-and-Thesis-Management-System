import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../general/general.module';
import { SimplesModule } from '../../shared/module/simples/simples.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { GeneralServicesModule } from '../../shared/services/general-services.module';

import { GeneralPaymentRoutingModule } from './general-payment-routing.module';
import { GeneralPaymentHomepageComponent } from './general-payment-homepage/general-payment-homepage.component';
import { GeneralPaymentDashboardComponent } from './general-payment-dashboard/general-payment-dashboard.component';
import { GeneralPaymentEntryDashboardComponent } from './general-payment-entry-dashboard/general-payment-entry-dashboard.component';
import { GeneralPaymentEntriesComponent } from './general-payment-entries/general-payment-entries.component';
import { GeneralPaymentEntryCreateComponent } from './general-payment-entry-create/general-payment-entry-create.component';
import { GeneralPaymentEntryDetailComponent } from './general-payment-entry-detail/general-payment-entry-detail.component';
import { GeneralPaymentEntryDeleteAllComponent } from './general-payment-entry-delete-all/general-payment-entry-delete-all.component';
import { GeneralPaymentEntryCreateValidatorComponent } from './general-payment-entry-create-validator/general-payment-entry-create-validator.component';
import { GeneralPaymentEntryVerificationComponent } from './general-payment-entry-verification/general-payment-entry-verification.component';

import { GeneralPaymentService } from './general-payment.service';
import { GeneralPaymentFormService } from './general-payment-form.service';
import { GeneralPaymentEntryReceiptComponent } from './general-payment-entry-receipt/general-payment-entry-receipt.component';

@NgModule({

  declarations: [

  	GeneralPaymentHomepageComponent,
  	GeneralPaymentDashboardComponent,
  	GeneralPaymentEntryDashboardComponent,
  	GeneralPaymentEntriesComponent,
  	GeneralPaymentEntryCreateComponent,
  	GeneralPaymentEntryDetailComponent,
  	GeneralPaymentEntryDeleteAllComponent,
  	GeneralPaymentEntryCreateValidatorComponent,
  	GeneralPaymentEntryVerificationComponent,
  	GeneralPaymentEntryReceiptComponent

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
