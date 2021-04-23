import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestCredentialRoutingModule } from './request-credential-routing.module';

import { GeneralModule } from '../../../../general/general.module';
import { GeneralServicesModule } from '../../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../../shared/module/simples/simples.module';

import { RequestCredentialService } from './request-credential.service';
import { RequestCredentialFormService } from './request-credential-form.service';

import { RequestCredentialEntryDeleteAllComponent } from './req-cred-entry-delete-all/req-cred-entry-delete-all.component';
import { RequestCredentialHomepageComponent } from './request-credential-homepage/request-credential-homepage.component';
import { RequestCredentialDashboardComponent } from './request-credential-dashboard/request-credential-dashboard.component';

import { RequestCredentialEntriesComponent } from './request-credential-entries/request-credential-entries.component';


@NgModule({

  declarations: [

  RequestCredentialEntryDeleteAllComponent,
  RequestCredentialHomepageComponent,
  RequestCredentialDashboardComponent,
  RequestCredentialEntriesComponent,

  ],
  
  imports: [
    CommonModule,
    RequestCredentialRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    SimplesModule
  ],

  providers : [

    RequestCredentialFormService,
    RequestCredentialService
  ]

})

export class RequestCredentialModule { 

}
