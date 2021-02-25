import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';
import { IsStudentGuard } from '../../../shared/guards/is-student.guard';

import { RefundEntryCreateHomepageComponent } from './refund-entry-create-homepage/refund-entry-create-homepage.component';
import { RefundEntryCreateComponent } from './refund-entry-create/refund-entry-create.component';

import { RouteConfigData } from './refund-entry-create-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : RefundEntryCreateHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : RefundEntryCreateComponent , 'data' : {'create' : RouteConfigData.create } , 'canActivate' : [IsStudentGuard] } ,

				]}
		]}
];

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class RefundEntryCreateRoutingModule { 

}
