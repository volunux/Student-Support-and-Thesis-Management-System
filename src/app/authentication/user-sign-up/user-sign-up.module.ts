import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralModule } from '../../general/general.module';
import { GeneralDirectivesModule } from '../../shared/directives/general-directives/general-directives.module';

import { UserSignUpRoutingModule } from './user-sign-up-routing.module';
import { UserAccountModule } from '../../shared/user-account/user-account.module';

import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserSignUpHomepageComponent } from './user-sign-up-homepage/user-sign-up-homepage.component';


@NgModule({
  declarations: [

  UserSignUpComponent,
  UserSignUpHomepageComponent

  ],
  
  imports: [
    CommonModule,
    UserSignUpRoutingModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralDirectivesModule,
    UserAccountModule,
  ]

})

export class UserSignUpModule { 

}
