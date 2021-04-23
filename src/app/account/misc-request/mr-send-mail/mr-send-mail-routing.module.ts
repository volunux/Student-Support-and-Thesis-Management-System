import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';
import { IsSuperAdminGuard } from '../../../shared/guards/is-super-admin.guard';

import { AcrSendMailHomepageComponent } from './mr-send-mail-homepage/mr-send-mail-homepage.component';
import { AcrSendMailComponent } from './mr-send-mail/mr-send-mail.component';

import { RouteConfigData } from './mr-send-mail-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : AcrSendMailHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : AcrSendMailComponent , 'data' : {'create' : RouteConfigData.create } , 'canActivate' : [IsSuperAdminGuard] } ,

				]}
		]}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class AcrSendMailRoutingModule { }
