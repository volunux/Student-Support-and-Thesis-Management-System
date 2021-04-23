import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentSessionRoutingModule } from './payment-session-routing.module';

import { GeneralModule } from '../../../../general/general.module';
import { GeneralServicesModule } from '../../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../../shared/module/simples/simples.module';

import { PaymentSessionService } from './payment-session.service';
import { PaymentSessionFormService } from './payment-session-form.service';

import { PaymentSessionEntryDeleteAllComponent } from './payment-session-entry-delete-all/payment-session-entry-delete-all.component';
import { PaymentSessionEntryDeleteComponent } from './payment-session-entry-delete/payment-session-entry-delete.component';
import { PaymentSessionEntryUpdateComponent } from './payment-session-entry-update/payment-session-entry-update.component';
import { PaymentSessionEntryDetailComponent } from './payment-session-entry-detail/payment-session-entry-detail.component';
import { PaymentSessionEntryCreateComponent } from './payment-session-entry-create/payment-session-entry-create.component';
import { PaymentSessionHomepageComponent } from './payment-session-homepage/payment-session-homepage.component';
import { PaymentSessionDashboardComponent } from './payment-session-dashboard/payment-session-dashboard.component';
import { PaymentSessionEntryValidatorComponent } from './payment-session-entry-validator/payment-session-entry-validator.component';
import { PaymentSessionEntriesComponent } from './payment-session-entries/payment-session-entries.component';
import { PaymentSessionFormInputComponent } from './payment-session-form-input/payment-session-form-input.component';


@NgModule({

  declarations: [

  PaymentSessionEntryDeleteAllComponent,
  PaymentSessionEntryDeleteComponent,
  PaymentSessionEntryUpdateComponent,
  PaymentSessionEntryDetailComponent,
  PaymentSessionEntryCreateComponent,
  PaymentSessionHomepageComponent,
  PaymentSessionDashboardComponent,
  PaymentSessionEntryValidatorComponent,
  PaymentSessionEntriesComponent,
  PaymentSessionFormInputComponent

  ],
  
  imports: [
    CommonModule,
    PaymentSessionRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    GeneralInternalModule,
    SimplesModule
  ],

  providers : [

    PaymentSessionFormService,
    PaymentSessionService
  ]

})

export class PaymentSessionModule { 

}
