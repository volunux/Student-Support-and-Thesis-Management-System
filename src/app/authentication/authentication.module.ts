import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneralModule } from '../general/general.module';
import { GeneralServicesModule } from '../shared/services/general-services.module';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ErrorMessagesService1 } from './error-messages.service1';
import { AuthenticationFormService } from './authentication-form.service';

@NgModule({

  declarations: [

    ForgotPasswordComponent,
    ResetPasswordComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralModule,
    GeneralServicesModule,
    AuthenticationRoutingModule
  ],

  providers : [

    ErrorMessagesService1,
    AuthenticationFormService
  ]

})

export class AuthenticationModule { 

}
