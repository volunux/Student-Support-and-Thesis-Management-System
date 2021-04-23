import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';
import { IsStudentGuard } from '../../../shared/guards/is-student.guard';

import { MiscRequestEntryCreateHomepageComponent } from './mr-entry-create-homepage/mr-entry-create-homepage.component';
import { MiscRequestEntryCreateComponent } from './mr-entry-create/mr-entry-create.component';

import { RouteConfigData } from './mr-entry-create-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : MiscRequestEntryCreateHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : MiscRequestEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } } ,

				]}
		]}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class MiscRequestEntryCreateRoutingModule { 

}
