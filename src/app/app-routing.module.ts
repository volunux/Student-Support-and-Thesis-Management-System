import { NgModule } from '@angular/core';
import { Routes , RouterModule , PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './all/welcome/welcome.component';
import { UnauthorizedComponent } from './all/unauthorized/unauthorized.component';
import { PageNotFoundComponent } from './all/page-not-found/page-not-found.component';
import { UnauthorizedGuard } from './general/unauthorized-guard.guard';
import { MemberDashboardComponent } from './all/member-dashboard/member-dashboard.component';
import { LoginDetailsComponent } from './all/login-details/login-details.component';

import { SelectivePreloadingStrategyService } from './all/selective-preloading-strategy.service';

const routes: Routes = [

	{'path' : '' , 'component' : WelcomeComponent } ,

	{'path' : 'user/dashboard' , 'component' : MemberDashboardComponent } ,

	{'path' : 'login-details' , 'component' : LoginDetailsComponent } ,

	{'path' : 'sign-in' , 'loadChildren' : () => import('./authentication/user-sign-in/user-sign-in.module').then(m => m.UserSignInModule) } ,

	{'path' : 'authentication' , 'loadChildren' : () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) } ,

	{'path' : 'sign-up' , 'loadChildren' : () => import('./authentication/user-sign-up/user-sign-up.module').then(m => m.UserSignUpModule) } ,

	{'path' : 'system' , 'loadChildren' : () => import('./system/system.module').then(m => m.SystemModule) } ,

	{'path' : 'account/profile' , 'loadChildren' : () => import('./account/profile/profile.module').then(m => m.ProfileModule) } ,

	{'path' : 'general-request' , 'loadChildren' : () => import('./account/general-request/general-request.module').then(m => m.GeneralRequestModule) } ,

	{'path' : 'refund' , 'loadChildren' : () => import('./account/refund/refund.module').then((m) => m.RefundModule) } ,

	{'path' : 'refund-letter' , 'loadChildren' : () => import('./account/refund-letter/refund-letter.module').then((m) => m.RefundLetterModule) } ,

	{'path' : 'general-payment' , 'loadChildren' : () => import('./account/general-payment/general-payment.module').then(m => m.GeneralPaymentModule) } ,

	{'path' : 'unauthorized' , 'component' : UnauthorizedComponent , 'canActivate' : [UnauthorizedGuard] } ,

	{'path' : '**' , 'component' : PageNotFoundComponent }

];

@NgModule({

  imports: [RouterModule.forRoot(routes, { 'preloadingStrategy': SelectivePreloadingStrategyService, 'scrollPositionRestoration': 'top', initialNavigation: 'enabled' })],

  providers : [SelectivePreloadingStrategyService] ,
  
  exports: [RouterModule]

})

export class AppRoutingModule { 

}
