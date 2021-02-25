import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../general/general.module';
import { GeneralDirectivesModule } from '../../shared/directives/general-directives/general-directives.module';


import { UserSignInRoutingModule } from './user-sign-in-routing.module';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignInHomepageComponent } from './user-sign-in-homepage/user-sign-in-homepage.component';
import { UserSignInValidatorComponent } from './user-sign-in-validator/user-sign-in-validator.component';

import { UserSignInFormService } from './user-sign-in-form.service';

@NgModule({

  declarations: [

  UserSignInComponent,
  UserSignInHomepageComponent,
  UserSignInValidatorComponent

  ],
  
  imports: [
  
    CommonModule,
    UserSignInRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralDirectivesModule
  ],

  providers : [

		UserSignInFormService
  ]

})

export class UserSignInModule { 

}
