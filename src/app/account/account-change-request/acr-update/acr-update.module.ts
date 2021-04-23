import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralModule } from '../../../general/general.module';
import { GeneralServicesModule } from '../../../shared/services/general-services.module';
import { GeneralAllModule } from '../../../shared/module/general-all/general-all.module';
import { UserOtherFieldModule } from '../../../shared/component/user-other-field/user-other-field.module';
import { PipesModule } from '../../../shared/pipes/pipes.module';

import { AcrUpdateRoutingModule } from './acr-update-routing.module';
import { AcrUpdateRoleComponent } from './acr-update-role/acr-update-role.component';
import { AcrUpdateUnitComponent } from './acr-update-unit/acr-update-unit.component';
import { AcrUpdateOptionComponent } from './acr-update-option/acr-update-option.component';
import { AcrUpdateHomepageComponent } from './acr-update-homepage/acr-update-homepage.component';

import { AcrUpdateService } from './acr-update.service';
import { AcrUpdateFormService } from './acr-update-form.service';

@NgModule({
	
  declarations: [

  AcrUpdateOptionComponent,
  AcrUpdateRoleComponent,
  AcrUpdateUnitComponent,
  AcrUpdateHomepageComponent

  ],
  
  imports: [
    CommonModule,
    AcrUpdateRoutingModule,
    GeneralModule,
    GeneralServicesModule,
    GeneralAllModule,
    UserOtherFieldModule,
    PipesModule,
    ReactiveFormsModule
  ],

  providers: [

    AcrUpdateService,
    AcrUpdateFormService
  ]

})

export class AcrUpdateModule { 

}
