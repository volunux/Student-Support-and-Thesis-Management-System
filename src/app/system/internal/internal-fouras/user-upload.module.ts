import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserUploadRoutingModule } from './user-upload-routing.module';

import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../shared/module/general-all/general-all.module';
import { GeneralInternalModule } from '../../../shared/module/general-internal/general-internal.module';
import { SimplesModule } from '../../../shared/module/simples/simples.module';

import { UserUploadService } from './user-upload.service';
import { UserUploadFormService } from './user-upload-form.service';

import { UserUploadEntryDeleteAllComponent } from './user-upload-entry-delete-all/user-upload-entry-delete-all.component';
import { UserUploadHomepageComponent } from './user-upload-homepage/user-upload-homepage.component';
import { UserUploadDashboardComponent } from './user-upload-dashboard/user-upload-dashboard.component';

import { UserUploadEntriesComponent } from './user-upload-entries/user-upload-entries.component';


@NgModule({

  declarations: [

  UserUploadEntryDeleteAllComponent,
  UserUploadHomepageComponent,
  UserUploadDashboardComponent,
  UserUploadEntriesComponent,

  ],
  
  imports: [
    CommonModule,
    UserUploadRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    SimplesModule
  ],

  providers : [

    UserUploadFormService,
    UserUploadService
  ]

})

export class UserUploadModule { 

}
