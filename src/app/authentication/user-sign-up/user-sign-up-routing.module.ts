import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaveLoggedInGuard } from '../../shared/guards/have-logged-in.guard';
import { UserSignUpHomepageComponent } from './user-sign-up-homepage/user-sign-up-homepage.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

import { RouteConfigData } from './user-sign-up-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : UserSignUpHomepageComponent ,

	'canActivate' : [HaveLoggedInGuard] ,

	'children' : [

			{'path' : '' ,

				'children' : [

					{'path' : '' , 'component' : UserSignUpComponent , 'data' : {'signUp' : RouteConfigData.signUp } , 'canActivate' : [HaveLoggedInGuard] } ,

				]}
		]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSignUpRoutingModule { }
