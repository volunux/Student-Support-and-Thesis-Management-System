import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';
import { IsSuperAdminGuard } from '../../../shared/guards/is-super-admin.guard';

import { AcrUpdateHomepageComponent } from './acr-update-homepage/acr-update-homepage.component';
import { AcrUpdateOptionComponent } from './acr-update-option/acr-update-option.component';

import { RouteConfigData } from './acr-update-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : AcrUpdateHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : AcrUpdateOptionComponent , 'data' : {'dashboard' : RouteConfigData.dashboard } , 'canActivate' : [IsSuperAdminGuard] } ,

				]}
		]}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class AcrUpdateRoutingModule { }
