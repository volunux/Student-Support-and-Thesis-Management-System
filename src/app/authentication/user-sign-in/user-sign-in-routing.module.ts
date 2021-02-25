import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaveLoggedInGuard } from '../../shared/guards/have-logged-in.guard';
import { UserSignInHomepageComponent } from './user-sign-in-homepage/user-sign-in-homepage.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';

import { RouteConfigData } from './user-sign-in-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : UserSignInHomepageComponent ,

	'canActivate' : [HaveLoggedInGuard] ,

	'children' : [

			{'path' : '' ,

				'children' : [

					{'path' : '' , 'component' : UserSignInComponent , 'data' : {'signIn' : RouteConfigData.signIn } , 'canActivate' : [HaveLoggedInGuard] } ,

				]}
		]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSignInRoutingModule { }
