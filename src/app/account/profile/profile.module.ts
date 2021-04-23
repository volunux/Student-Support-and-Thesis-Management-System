import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralServicesModule } from '../../shared/services/general-services.module';
import { GeneralModule } from '../../general/general.module';
import { GeneralDirectivesModule } from '../../shared/directives/general-directives/general-directives.module';
import { UserOtherFieldModule } from '../../shared/component/user-other-field/user-other-field.module';
import { ProfileRoutingModule } from './profile-routing.module';


import { ProfileHomepageComponent } from './profile-homepage/profile-homepage.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ProfileDeactivateComponent } from './profile-deactivate/profile-deactivate.component';
import { ProfileReactivateComponent } from './profile-reactivate/profile-reactivate.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileValidatorComponent } from './profile-validator/profile-validator.component';


import { ProfileService } from './profile.service';
import { ProfileFormService } from './profile-form.service';
import { ProfileInputFieldsComponent } from './profile-input-fields/profile-input-fields.component';
import { ProfileEntryTypeDashboardComponent } from './profile-entry-type-dashboard/profile-entry-type-dashboard.component';


@NgModule({
  declarations: [

  ProfileDashboardComponent, 
  ProfileDetailComponent, 
  ProfileUpdateComponent, 
  ProfileDeactivateComponent, 
  ProfileReactivateComponent, 
  ChangePasswordComponent, 
  ProfileValidatorComponent,
  ProfileInputFieldsComponent,
  ProfileHomepageComponent,
  ProfileEntryTypeDashboardComponent,

  ],

  imports: [

    CommonModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralDirectivesModule,
    GeneralServicesModule,
    UserOtherFieldModule,
    ProfileRoutingModule,
  ] ,

  providers : [

  ProfileFormService,
  ProfileService,
  ]

})

export class ProfileModule { 

}
