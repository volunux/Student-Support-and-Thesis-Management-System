import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HaveLoggedInGuard } from '../shared/guards/have-logged-in.guard';

import { AData } from './authentication-route-data';

const routes : Routes = [

	{'path' : 'forgot-password' , 'component' : ForgotPasswordComponent , 'data' : {'forgotPassword' : AData.forgotPassword } } ,

	{'path' : 'reset-password/:token' , 'component' : ResetPasswordComponent ,'data' : {'resetPassword' : AData.resetPassword } } ,

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]

})

export class AuthenticationRoutingModule { 

}
