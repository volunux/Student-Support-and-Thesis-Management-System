import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';
import { IsStudentGuard } from '../../../shared/guards/is-student.guard';

import { GeneralRequestEntryCreateHomepageComponent } from './gr-entry-create-homepage/gr-entry-create-homepage.component';
import { GeneralRequestEntryCreateComponent } from './gr-entry-create/gr-entry-create.component';

import { RouteConfigData } from './gr-entry-create-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : GeneralRequestEntryCreateHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : GeneralRequestEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } , 'canActivate' : [IsStudentGuard] } ,

				]}
		]}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class GeneralRequestEntryCreateRoutingModule { 

}
