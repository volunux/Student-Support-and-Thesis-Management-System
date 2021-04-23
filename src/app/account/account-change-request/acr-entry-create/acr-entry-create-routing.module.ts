import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';
import { IsStudentGuard } from '../../../shared/guards/is-student.guard';

import { AccountChangeRequestEntryCreateHomepageComponent } from './acr-entry-create-homepage/acr-entry-create-homepage.component';
import { AccountChangeRequestEntryCreateComponent } from './acr-entry-create/acr-entry-create.component';

import { RouteConfigData } from './acr-entry-create-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : AccountChangeRequestEntryCreateHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : AccountChangeRequestEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				]}
		]}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class AccountChangeRequestEntryCreateRoutingModule { 

}
