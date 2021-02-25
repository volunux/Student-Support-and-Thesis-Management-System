import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationGuard } from '../../../shared/guards/authentication.guard';
import { EntryDeleteAllGuard } from '../../../shared/guards/entry-delete-all.guard';
import { IsStudentGuard } from '../../../shared/guards/is-student.guard';

import { ProfileEntryUpdateSignatureHomepageComponent } from './profile-entry-update-signature-homepage/profile-entry-update-signature-homepage.component';
import { ProfileEntryUpdateSignatureComponent } from './profile-entry-update-signature/profile-entry-update-signature.component';

import { RouteConfigData } from './profile-entry-update-signature-route-data';

const routes : Routes = [

	{'path' : '' , 

	'component' : ProfileEntryUpdateSignatureHomepageComponent ,

	'canActivate' : [AuthenticationGuard] ,

	'canLoad' : [AuthenticationGuard] ,

	'children' : [

			{'path' : '' ,

			'canActivateChild' : [AuthenticationGuard] ,

				'children' : [

					{'path' : '' , 'component' : ProfileEntryUpdateSignatureComponent , 'data' : {'signature' : RouteConfigData.signature } } ,

				]}
		]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileEntryUpdateSignatureRoutingModule { }
