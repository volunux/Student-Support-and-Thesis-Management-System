import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RefundSignatureRoutingModule } from './refund-signature-routing.module';

import { GeneralModule } from '../../../../general/general.module';
import { GeneralServicesModule } from '../../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../../shared/module/simples/simples.module';

import { RefundSignatureService } from './refund-signature.service';
import { RefundSignatureFormService } from './refund-signature-form.service';

import { RefundSignatureEntryDeleteAllComponent } from './refund-signature-entry-delete-all/refund-signature-entry-delete-all.component';
import { RefundSignatureHomepageComponent } from './refund-signature-homepage/refund-signature-homepage.component';
import { RefundSignatureDashboardComponent } from './refund-signature-dashboard/refund-signature-dashboard.component';

import { RefundSignatureEntriesComponent } from './refund-signature-entries/refund-signature-entries.component';


@NgModule({

  declarations: [

  RefundSignatureEntryDeleteAllComponent,
  RefundSignatureHomepageComponent,
  RefundSignatureDashboardComponent,
  RefundSignatureEntriesComponent,

  ],
  
  imports: [
    CommonModule,
    RefundSignatureRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    SimplesModule
  ],

  providers : [

    RefundSignatureFormService,
    RefundSignatureService
  ]

})

export class RefundSignatureModule { 

}
